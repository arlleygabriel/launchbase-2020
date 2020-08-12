const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const coursesData = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
})

server.get("/", function(req, res){
  const about = {
    name: 'Rocketseat🚀',
    img: "/img/screenshot_1.png",
    slogan:'As melhores tecnologias em programação',
    techs: [
      {name: 'Node.js'},
      {name: 'React'},
      {name: 'React Native'}
    ],
    links:[
      {name: 'Facebook', url: "https://www.facebook.com/rocketseat/" },
      {name: 'Instagram', url: 'https://www.instagram.com/rocketseat_oficial'},
      {name: 'Github', url: 'https://github.com/Rocketseat'}
    ]
  }
  return res.render("about", { about : about})
})

server.get("/courses", function(req, res){
  return res.render("courses", { items : coursesData})
})

server.use(function(req, res) {
  res.status(404).render("not-found");
})

server.listen(5000, function(){
  console.log("Server is running")
})