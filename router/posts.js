const express = require("express");
const router  = express.Router();
const post = require('../data/post-list')
// index
router.get('/', (req, res) => {
  res.json(post)
})
// show
router.get('/:id', (req,res)=>{
  const param = req.params.id
  const postSlug = post.find(({ slug }) => slug === param);
  res.json(postSlug)
});

//store
router.post('/', (req,res)=>{
  res.send(`Creazione nuovo post`);
});

//update 
router.put('/:id', (req,res)=>{
  const idPost = req.params.id
  res.send(`Modifica integrale ${idPost}`);
});

//modify
router.patch('/:id', (req,res)=>{
  const idPost = req.params.id
  res.send(`Modifica parziale ${idPost}`);
});

//delete
router.delete('/:id', (req,res)=>{
  const idPost = req.params.id
  res.send(`Eliminazione post ${idPost}`);
});

module.exports = router;