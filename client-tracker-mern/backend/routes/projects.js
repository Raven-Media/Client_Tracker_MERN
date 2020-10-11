const router = require('express').Router();
let Project = require('../models/project.model')

// Get All "Get" Function
router.route('/').get((req, res) => {
    Project.find()
        .then(clients => res.json(clients))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create Function 
router.post("/add", (req, res) => {

    const newProject = new Project({
        project_name: req.body.project_name,
        project_description: req.body.project_description,
        project_stack: req.body.project_stack,
        project_phases: Number(req.body.project_phases),
        estimated_duration: Number(req.body.estimated_duration),
        start_date: Date.parse(req.body.start_date)

    });

    newProject.save()
        .then(() => res.json('Project Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get by ID "Get" Function
router.route('/:id').get((req, res) => {
    Project.findById(req.params.id)
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;

//Misc variable declarations 

//     const projectName = req.body.project_name
//     const projectDescription = req.body.project_description
//     const projectStack = req.body.project_stack
//     const projectPhases = Number(req.body.project_phases)
//     const estDuration = Number(req.body.estimated_duration)
//     const startDate = Date.parse(req.body.start_date)

// projectName,
// projectDescription,
// projectStack,
// projectPhases,
// estDuration,
// startDate


//Insomnia/Postman Model Route Test JSON 
// {
// "project_name": "Test # 1",
// "project_description": "String",
// "project_stack": "String",
// "project_phases": "1",
// "estimated_duration": "1",
// "start_date": "05-27-2020"
// }

// router.route('/add').post((req, res) => {