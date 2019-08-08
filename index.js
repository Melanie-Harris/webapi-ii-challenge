const express = require('express');//1) import express
const router= require('./routes.js');
const comments=require('./commentRoutes.js');

const server = express();//2) create the server

// server.use('/', (req, res) => res.send('Hey beautiful, api is up and running'));// 5) read data. When anyone does get request to the / server we will run this function
server.use(express.json());// .use adds configs to express server (adding middleware to server)
server.use('/api', router);
server.use('/api', comments);






const port= 8006;
server.listen(port, ()=> console.log(`\nHey beautiful, api is running on port ${port}\n`))// 3) port listening on 8000



// server.post("/api/posts ", (req, res) => {//Creates a post using the information sent inside the `request body`.                       
//   const postInfo = req.body;
//   console.log("post info from body", postInfo);
//   db.add(postInfo)
//     .then(db => {
//       res.status(201).json(db);
//     })
//     .catch(error => {
//       res.status(500).json({ message: "error adding the hub" });
//     });
// });

// const db = require('./data/db');//4) getting access to database