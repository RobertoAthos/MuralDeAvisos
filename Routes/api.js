const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const posts = require('../Model/posts')

router.get("/all", (req,res)=>{
    res.json(JSON.stringify(posts.getAll()))
})

router.post("/new", bodyParser.json(), (req,res)=>{


   let title = req.body.title // vai pegar o valor do título no front
   let description = req.body.description // vai pegar o valor da descrição no front
   posts.newPost(title,description)
   res.send("Post adicionado")

})

module.exports = router