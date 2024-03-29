import { UploadImageMeta } from '@type/DocumentType';
import AWS from 'aws-sdk';

const albumBucketName = process.env.REACT_APP_ALBUM_BUCKET_NAME;
const bucketRegion = process.env.REACT_APP_BUCKET_REGION;
const IdentityPoolId = process.env.REACT_APP_IDENTITY_POOL_ID;

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId,
  }),
});

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: albumBucketName },
});

export default async function uploadImages(uploadImageMetas: UploadImageMeta[]) {
  const oneFile = uploadImageMetas[0];

  const { file } = oneFile;
  const fileName = file.name;
  const imageKey = `${encodeURIComponent('uploaded')}/`;

  const uploadImageKey = imageKey + fileName;

  const upload = s3.upload({
    Bucket: albumBucketName,
    Key: uploadImageKey,
    Body: file,
  });

  // // Use S3 ManagedUpload class as it supports multipart uploads
  // const upload = new AWS.S3.ManagedUpload({
  //   params: {
  //     Bucket: albumBucketName,
  //     Key: photoKey,
  //     Body: file,
  //   },
  // });

  const promise = await upload.promise();
  return promise.Location;
}
