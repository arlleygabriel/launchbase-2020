const dev = {
  name : 'Mayk',
  age: '25',
  stack: [ {
    name: 'C++',
    speciality: 'Desktop'
  },
  {
    name: 'Python',
    speciality: 'Data Science'
  },
  {
    name: 'Javascript',
    speciality: 'Web/Mobile'
  }
  ]
}

console.log(`The user ${dev.name} is ${dev.age} years old and use the programming language ${dev.stack[0].name} with speciality in ${dev.stack[0].speciality}!`)