const { uploadToS3, getAllFilesFromS3 } = require('../services/s3Service');

const storeJson = async (req, res) => {
  const data = req.body;
  if (!data) return res.status(400).send('Invalid JSON data');
  
  try {
    const key = `file-${Date.now()}.json`;
    const result = await uploadToS3(key, data);
    return res.status(200).send({ e_tag: result.ETag, url: result.Location });
  } catch (error) {
    return res.status(500).send('Error uploading to S3');
  }
};

const retrieveJson = async (req, res) => {
  try {
    const files = await getAllFilesFromS3();
    return res.status(200).json(files);
  } catch (error) {
    return res.status(500).send('Error retrieving files from S3');
  }
};

module.exports = { storeJson, retrieveJson };
