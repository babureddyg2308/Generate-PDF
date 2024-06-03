const Pdf = require('../models/Pdf');
const PDFDocument = require('pdfkit');
const path = require('path');
// ../../src/models/Pdf
const createPdf = async (req, res) => {
    const { author, title, content } = req.body;
    try {
        const doc = new PDFDocument();
        let filename = encodeURIComponent(title) + '.pdf';
        res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
        res.setHeader('Content-type', 'application/pdf');
        doc.pipe(res);
        
        doc.image(path.join(__dirname, '../uploads', req.file.filename), 0, 0, { width: 600 });
        doc.text(title, 100, 100);
        doc.text(author, 100, 150);
        doc.text(content, 100, 200);
        doc.end();

        const pdf = new Pdf({ author, title, content });
        await pdf.save();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPdfs = async (req, res) => {
    try {
        const pdfs = await Pdf.find();
        res.json(pdfs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createPdf, getPdfs };
