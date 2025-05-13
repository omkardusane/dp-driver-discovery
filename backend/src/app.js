const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const cors = require('cors');
const applicantsModule = require('./applicants');

module.exports = () => {
    app.use(cors({
        origins: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000', 'http://127.0.0.1:3000']
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