const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const bucketName = 'koachi_ai';

const uploadToS3 = async (key, data) => {
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: JSON.stringify(data),
    ContentType: 'application/json'
  };
  const result = await s3.upload(params).promise();
  return result;
};

const getAllFilesFromS3 = async () => {
  const params = {
    Bucket: bucketName
  };
  const data = await s3.listObjectsV2(params).promise();
  const fileContents = await Promise.all(
    data.Contents.map(async (file) => {
      const fileData = await s3.getObject({ Bucket: bucketName, Key: file.Key }).promise();
      return JSON.parse(fileData.Body.toString('utf-8'));
    })
  );
  return fileContents;
};

module.exports = { uploadToS3, getAllFilesFromS3 };
