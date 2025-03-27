const express = require("express");
const router  = express.Router();
const post = require('../data/post-list')
// index
router.get('/', (req, res) => {
  res.json(post)
})
// show
router.get('/:id', (req,res)=>{
  res.send(`detagli post`);
});

//store
router.post('/', (req,res)=>{
  res.send('Creazione nuovo post');
});

//update 
router.put('/:id', (req,res)=>{
  res.send('Modifica integrale');
});

//modify
router.patch('/:id', (req,res)=>{
  res.send('Modifica parziale');
});

//delete
router.delete('/:id', (req,res)=>{
  res.send('Eliminazione post');
});

module.exports = router;