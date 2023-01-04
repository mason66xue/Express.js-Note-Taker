const express =require('express');
const path=require('path');
// const fs=requier('fs');

// init express 
const app =express();
app.get('api/notes',(req, res)=>{
    res.json(notes)
})

//set a static folder 
app.use(express.static(path.join(__dirname, 'public')));



// Port
const PORT =process.env.PORT || 3000;
//set up listner
app.listen(PORT,()=> console.log('server started on port '))


