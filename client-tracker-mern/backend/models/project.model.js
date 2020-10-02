const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const projectSchema = new Schema({

    project_name: { type: String, required: true },
    project_description: { type: String, required: true },
    project_stack: { type: String, required: true },
    project_phases: { type: Number, required: true },
    estimated_duration: { type: Number, required: true },
    start_date: { type: Date, required: true },
   
    
}, {
    timestamps: true,
}); 

const Project = mongoose.model('Project', projectSchema); 

module.exports = Project; 


// project_name: { type: String, required: true },
//     project_description: { type: String, required: true },
//     project_stack: { type: String, required: true },
//     project_phases: { type: Number, required: true },
//     estimated_duration: { type: Number, required: true },
//     start_date: { type: Date, required: true },

    // project_name: { type: String },
    // project_description: { type: String },
    // project_stack: { type: String },
    // project_phases: { type: Number },
    // estimated_duration: { type: Number },
    // start_date: { type: Date },

    // project_name: { type: String, default: '' },
    // project_description: { type: String, default: '' },
    // project_stack: { type: String, default: '' },
    // project_phases: { type: Number, default: '' },
    // estimated_duration: { type: Number, default: '' },
    // start_date: { type: Date, default: '' },