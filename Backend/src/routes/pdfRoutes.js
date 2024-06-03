const express = require('express');
// const { createPdf, getPdfs } = require('../../config/controllers/pdfController');
const { createPdf, getPdfs } = require('../controllers/pdfController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/create', upload.single('cover'), createPdf);
router.get('/all', getPdfs);

module.exports = router;
