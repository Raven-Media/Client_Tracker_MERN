const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    client_name: {
        type: String,
        default: "", 
        required: true,
        sparse: true,
        trim: true,
        minlength: 3
    },
    add_date: { type: Date, required: true },

}, {
    timestamps: true,
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client; 