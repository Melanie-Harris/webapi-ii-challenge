const express = require('express');
const db = require('./data/db.js');
const router = express.Router();

router.get("/posts/:id/comments", (req, res)=>{
    const {id} = req.params

if(!id){
    db.findCommentById(id).then(clients=>{
        res.status(404).json({ message: "The post with the specified ID does not exist." })
    })
}else{
db.findCommentById(id).then(clients=>{
    res.status(200).json(clients)
}).catch(error=>{
    res.status(500).json({ error: "The comments information could not be retrieved." })
})
}
})


router.post("/posts/:id/comments", (req, res) => {
 const blogBody = req.body;
 const { text } = req.body;
 const { id } = req.params;
 console.log(req.body);
 if (!id) {
 db.insertComment(blogBody).then(comments => res.status(404).json({ message: "no id" })) ;
 } else if (!text) {
 db.insertComment(blogBody).then( comments => res.status(400).json({ message: "no text in body" }))  ;
 }else{ db.insertComment(blogBody).then(comments =>res.status(201).json(comments))}
});



module.exports = router; 