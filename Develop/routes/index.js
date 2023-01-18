const express =require('express');

//import modular routers for /notes
const notesRouter=require('./notes');
const diagnosticsRouter=require('./diagnostic');

const app = express();

// https://localhost:3001/api/notes
app.use('/notes',notesRouter);
app.use('./diagnostics', diagnosticsRouter);

module.exports=app; 