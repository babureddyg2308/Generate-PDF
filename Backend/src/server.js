const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const pdfRoutes = require('./routes/pdfRoutes.js');
const seedDB = require('./seed.js');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/pdf', pdfRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the PDF generation backend!');
});

app.get('/seedData', async (req, res) => {
    try {
        await seedDB();
        res.send('Database seeded successfully!');
    } catch (error) {
        res.status(500).send(`Error seeding database: ${error.message}`);
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
