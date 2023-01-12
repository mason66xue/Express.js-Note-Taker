const express = require('express');
const path=require('path');
const app=express();
const api = require('./routes/index.js');

const PORT =process.env.PORT || 3001;



//set a static folder 
// app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
// localhost:3001/
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/develop/public/static/index.html'))
);

// GET Route for notes page
// localhost:3001/notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/develop/public/notes.html'))
);

// Wildcard route to direct users to home
// localhost:3001/anything else
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/develop/public/index.html'))
);


//set up listner
app.listen(PORT,()=> console.log(`server started on port ${PORT}`))


