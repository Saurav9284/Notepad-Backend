const express = require('express')
const NoteModel = require('../Models/Notes')
const noteController = express.Router()

noteController.post('/create', async (req,res)=>{
    const userId = req.userId
    const {title, description} = req.body;
    
    if(!title || !description){
        return res.send({msg:'Please fill all the details'})
    }
    try {
        const note = await NoteModel.create({
            title:title,
            description:description,
            createrId:userId,
        })
        res.send({msg:'Note created'})
        console.log(note)
    } catch (error) {
        console.log(error)
        res.send({msg:'Something went wrong'})
    }
});

module.exports = noteController