const express = require('express');
const noteModel = require('./models/note.model');

const app = express();

app.use(express.json())

const notes = [] 

app.post('/notes', async (req, res) => {
    
    const data = req.body  //{ title , description}
    await noteModel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message: "Note Created"
    })
})

app.get('/notes', async (req, res) => {

    const notes = await noteModel.find() // find() always returns an array -> in form of ARRAY OF AN OBJECT

    /*
    const notes = await noteModel.findOne({   // here findOne() returns a single object here instead of array of objects
        title: "title1"                       // here it will give note that matches this title from d.b.
    })                                        // if a title is written that doesn't exist it returns -> `null`
    */

   /*
   find()    -> [{} {}] or []
   findOne() -> {} or null
*/

    res.status(200).json({
        message: "Notes fetached sucessfully",
        notes: notes 
    })
})

app.delete('/notes/:id', async (req, res) => {

    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "Deleted sucessfully"
    })
})

app.patch('/notes/:id', async (req, res) => {

    const id = req.params.id 
    const description = req.body.description 

    await noteModel.findOneAndUpdate(
        { _id: id }, 
        { description: description }
    )

    res.status(200).json({
        message: "Note Updated sucessfully"
    })
})


module.exports = app;
