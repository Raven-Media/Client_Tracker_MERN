const router = require('express').Router();
let Project = require('../models/project.model')

router.route('/').get((req, res) => {
    Project.find()
        .then(clients => res.json(clients))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const projectName = req.body.project_name
    const projectDescription = req.body.project_description
    const projectStack = req.body.project_stack
    const projectPhases = Number(req.body.project_phases)
    const estDuration = Number(req.body.estimated_duration)
    const startDate = Date.parse(req.body.start_date)

    const newProject = new Project({
        projectName,
        projectDescription,
        projectStack,
        projectPhases,
        estDuration,
        startDate
    });

    newProject.save()
        .then(() => res.json('Project Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 