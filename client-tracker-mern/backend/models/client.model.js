const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    client_name: {
        type: String,
        default: "", 
        nullable: true,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },

}, {
    timestamps: true,
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client; 