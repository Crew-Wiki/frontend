import { UploadImageMeta } from '@type/DocumentType';
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

export default async function uploadImages(albumName: string, uploadImageMetas: UploadImageMeta[]) {
  const newMetas = await Promise.all(
    uploadImageMetas.map(async (imageMeta) => {
      const { file } = imageMeta;
      const uploadImageKey = `${albumName}/${file.name}`;

      const upload = s3.upload({
        ACL: 'public-read',
        Bucket: bucketName,
        Key: uploadImageKey,
        Body: file,
      });

      const newMeta = imageMeta;
      const promise = await upload.promise();
      newMeta.s3URL = promise.Location;

      return newMeta;
    }),
  );

  return newMetas;
}
