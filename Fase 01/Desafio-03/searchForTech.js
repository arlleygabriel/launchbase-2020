const users = [
  {name: 'Carlos', stack: ['HTML', 'CSS']},
  {name: 'Jasmine', stack: ['Javascript', 'CSS']},
  {name: 'Truane', stack: ['HTML', 'Node.js']}
]

function checkIfUserWorksWithCss (user){
  if (user.stack[0] == 'CSS' || user.stack[1] == 'CSS'){
    return true
  }
  else {
    return false
  }
}

for (let i = 0; i < users.length; i++){
  const userWorksWithCss = checkIfUserWorksWithCss(users[i])

  if (userWorksWithCss){
    console.log(`The user ${users[i].name} works with CSS`)
  }

}