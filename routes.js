const express = require('express');
const db = require('./data/db.js');


const router = express.Router();
//end point starting with /api
router.get('/posts', (req, res) => {
 db.find().then(post=> {res.status(200).json(post)}).catch(error => {res.status(500).json({error: "The post information could not be retrieved."})})
});

router.get('/posts/:id', (req, res) => {
    const {id}=req.params
    
    db.findById(id)
    .then(userId=>{
        if(id) {
            res.status(200).json(userId)
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    })
    .catch(error => {res.status(500).json({ error: "The posts information could not be retrieved."})})
});

router.post('/posts', (req, res) => {
  if(!req.body.title || !req.body.contents){res.status(400).json('errorMessage: "Please provide title and contents for the post.')}
    db.insert(req.body)
    .then(id => { res.status(201)})
    .catch(error=> {res.status(500).json('error: "There was an error while saving the post to the database')})
});
// error started here
router.get('/posts/:id/comments', (req, res) => {
    db.insert(id)
    .then(comments=>{
        if(id){
            res.status(200).json(comments)
        }else{
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        } 
       .catch(error => {res.status(500).json({ error: "The post could not be removed" })}) 
    })
})






module.exports = router; 