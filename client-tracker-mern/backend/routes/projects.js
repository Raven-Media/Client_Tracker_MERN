const router = require('express').Router();
let Project = require('../models/project.model')

// Get All "Get" Function- Find 
router.route('/').get((req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err));
});

// "Create" Post Function 
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

// "Read" Get Function- Find by ID
router.route('/:id').get((req, res) => {
    Project.findById(req.params.id)
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err));
});

// "Update" Post Function- Find by ID
router.post("/update/:id", (req, res) => {

    Project.findById(req.params.id)
        .then(project => {
            project.project_name = req.body.project_name;
            project.project_description = req.body.project_description;
            project.project_stack = req.body.project_stack;
            project.project_phases = Number(req.body.project_phases);
            project.estimated_duration = Number(req.body.estimated_duration);
            project.start_date = Date.parse(req.body.start_date); 

            project.save()
                .then(() => res.json('Project Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
}); 


// "Delete" Delete Function- Find by ID and delete 


//Export Router Modules 
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


router.post("/update/:id", (req, res) => {

    Project.findById(req.params.id)
        .then(project => {
            project.project_name = req.body.project_name;
            project.project_description = req.body.project_description;
            project.project_stack = req.body.project_stack;
            project.project_phases = Number(req.body.project_phases);
            project.estimated_duration = Number(req.body.estimated_duration);
            project.start_date = Date.parse(req.body.start_date); 

            project.save()
                .then(() => res.json('Project Added!'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
}); 