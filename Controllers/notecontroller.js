const express = require('express')
const NoteModel = require('../Models/Notes')

const noteController = express.Router()

// get

noteController.get('/', async (req, res) => {
    try {
        const userId = req.userId;
        const userNotes = await NoteModel.find({ createrId: userId });
        res.json(userNotes);
    } catch (error) {
        console.log(error);
        res.send({ msg: 'Something went wrong' });
    }
});

// Create 

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