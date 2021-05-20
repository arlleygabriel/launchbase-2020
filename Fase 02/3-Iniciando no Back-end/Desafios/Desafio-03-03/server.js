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
    img: "/img/melhores-tecnologias.svg",
    slogan:'The best coding technologies for you reach the next level in programming!',
    text: 'Imagine yourself mastering the same technologies adopted by the best teams in the world, building high performance applications and standing out among the largest programmers',
    techs: [
      {name: 'Node.js', logo: '/img/nodejs-seeklogo.com.svg'},
      {name: 'React', logo: '/img/react.png'},
      {name: 'React Native', logo: '/img/react-native.png'}
    ],
    links:[
      {name: '/rocketseat', url: "https://www.facebook.com/rocketseat/", img: "/img/facebook.svg" },
      {name: '/rocketseat_oficial', url: 'https://www.instagram.com/rocketseat_oficial', img: "/img/instagram-esbocado.svg"},
      {name: '/rocketseat', url: 'https://github.com/Rocketseat', img: "/img/logotipo.svg"}
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