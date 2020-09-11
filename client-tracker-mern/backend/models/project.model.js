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