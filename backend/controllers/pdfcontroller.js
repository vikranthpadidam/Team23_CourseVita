// pdfController.js
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');
const Pdf = require('../models/Pdf'); // Update the path accordingly

const outputDirectory = 'public/outputs';
const outputFilePath = path.join(outputDirectory, `${Date.now()}output.pdf`);
if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
  }
const convertAndDownload = async (req, res) => {
  const files = req.files;
  const filePaths = [];

  for (const fieldName in files) {
    if (files[fieldName].length > 0) {
      files[fieldName].forEach((file) => {
        filePaths.push(file.path);
      });
    }
  }
  for (const fieldName in files) {
    if (files[fieldName].length > 0) {
      files[fieldName].forEach((file) => {
        filePaths.push(file.path);
      });
    }
  }
  exec(`magick convert ${filePaths.join(' ')} ${outputFilePath}`, async (err, stderr, stdout) => {
    if (err) throw err;

    const pdf = new Pdf({
      fileName: 'output.pdf',
      filePath: outputFilePath,
    });

    try {
      await pdf.save();
    } catch (saveErr) {
      console.error('Error saving to MongoDB:', saveErr);
    }

    res.download(outputFilePath, (downloadErr) => {
      if (downloadErr) throw downloadErr;

      filePaths.forEach(async (filePath) => {
        filePaths.forEach((filePath) => {
            // Check if the file exists before attempting to unlink
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath);
            } else {
              console.error(`File not found: ${filePath}`);
            }
          });
        try {
          await fs.promises.access(filePath, fs.constants.F_OK);
          fs.unlinkSync(filePath);
        } catch (err) {
          console.error(`Error deleting file ${filePath}:`, err);
        }
      });
    });
  });
};

module.exports = { convertAndDownload };
