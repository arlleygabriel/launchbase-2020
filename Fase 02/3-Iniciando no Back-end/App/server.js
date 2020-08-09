const express = require('express')
const nunjucks = require('nunjucks')

const server =  express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views",{
  express: server,
  autoescape: false,
  noCache: true,
})

server.get("/", function(req, res){
  const about ={
    avatar_url: "https://avatars3.githubusercontent.com/u/52089987?s=400&u=21817f4826747994c8aa231da10d656188a039ea&v=4",
    name: "Arlley Dias",
    role: 'Focado em desenvolvimento e testes de soluções utilizando tecnologias.',
    description: 'Técnico em Eletrônica, estudante de Engenharia Eletrônica e aluno na <a href="https://rocketseat.com.br/" target="_blank">Rocketseat 🚀 </a>.',
    links: [
      { name: "Github", url: "https://github.com/arlleygabriel"},
      { name: "Instagram", url: "https://www.instagram.com/arlleygabriel/"},
      { name: "Linkedin", url: "https://br.linkedin.com/in/arlley-gabriel-dias-e-dias-904748123"}
    ]
  }
  return res.render("about", { about: about})
})

server.get("/portfolio", function(req,res){
  return res.render("portfolio", { items: videos })
})

server.get('/video', function(req,res){
  const id = req.query.id

  const video = videos.find(function(video){
    return video.id == id
  })

  if (!video) {
    return res.send("Video not found")
  }

  return res.render("video", { item: video })
})

server.listen(3000, function(){
  console.log("Server is running")
})