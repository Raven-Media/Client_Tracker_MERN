const router = require('express').Router();
let Project = require('../models/project.model')

router.route('/').get((req, res) => {
    Project.find()
        .then(clients => res.json(clients))
        .catch(err => res.status(400).json('Error: ' + err));
});