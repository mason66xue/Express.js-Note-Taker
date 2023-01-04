const express =require('express');

//import modular routers for /notes
const notesRouter=require('./notes');
const diagnosticsRouter=require('./diagnostic');

const app = express();

app.use('./notes',notesRouter);
app.use('./diagnostics', diagnosticsRouter);

module.exports=app; 