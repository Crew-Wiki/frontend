import { UploadImageMeta } from '@type/DocumentType';
import Resizer from 'react-image-file-resizer';
import AWS from 'aws-sdk';

const bucketName = process.env.REACT_APP_BUCKET_NAME;
const region = process.env.REACT_APP_BUCKET_REGION;
const accessKeyId = process.env.REACT_APP_ACCESS_KEY;
const secretAccessKey = process.env.REACT_APP_SECRET_KEY;

AWS.config.update({
  region,
  accessKeyId,
  secretAccessKey,
});

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: bucketName },
});

const resizeFile = (file: File) =>
  new Promise((res) => {
    Resizer.imageFileResizer(file, 1000, 1000, 'JPEG', 70, 0, (uri) => res(uri), 'file');
  });

const changeDuplicatedName = (uploadImageMeats: UploadImageMeta[]) => {
  const names: Record<string, number> = {};
  const changedImageMetas = uploadImageMeats.map((imageMeta) => {
    if (names[imageMeta.file.name] === 0) {
      names[imageMeta.file.name] += 1;
    } else {
      names[imageMeta.file.name] = 0;
    }
    const newFile = new File(
      [imageMeta.file],
      `${names[imageMeta.file.name] ? names[imageMeta.file.name] : ''}${imageMeta.file.name}`,
    );
    return { ...imageMeta, file: newFile };
  });
  return changedImageMetas;
};

export default async function uploadImages(albumName: string, uploadImageMetas: UploadImageMeta[]) {
  const newMetas = await Promise.all(
    changeDuplicatedName(uploadImageMetas).map(async (imageMeta) => {
      const resizedImage = (await resizeFile(imageMeta.file)) as File;
      const uploadImageKey = `${albumName}/${imageMeta.file.name}`;

      const upload = s3.upload({
        ACL: 'public-read',
        Bucket: bucketName,
        Key: uploadImageKey,
        Body: resizedImage,
      });

      const newMeta = imageMeta;
      const promise = await upload.promise();
      newMeta.s3URL = promise.Location;

      return newMeta;
    }),
  );

  return newMetas;
}
