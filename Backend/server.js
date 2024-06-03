const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');
const pdfRoutes = require('./src/routes/pdfRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/pdf', pdfRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
