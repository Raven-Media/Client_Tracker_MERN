const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//Server Setup 
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//MongoDB & Mongoose Connection

mongoose.set('useUnifiedTopology', true);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: true })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

//Routes 
const clientsRouter = require('./routes/clients')
const projectsRouter = require('./routes/projects')

app.use('/clients', clientsRouter)
app.use('/projects', projectsRouter)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 