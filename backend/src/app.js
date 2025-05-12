const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const cors = require('cors');
const applicantsModule = require('./applicants');

module.exports = () => {
    app.use(cors({
        origin: 'http://localhost:5173'
    }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/applicants', applicantsModule)
    // serve the frontend
    app.use('/ui', express.static('../frontend/dist'));
    app.listen(port, () => {
        console.log(`Express server listening on port ${port}`);
    });
}