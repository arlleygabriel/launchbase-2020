const users = [
  {name: 'Carlos', stack: ['HTML', 'CSS']},
  {name: 'Jasmine', stack: ['Javascript', 'CSS']},
  {name: 'Truane', stack: ['HTML', 'Node.js']}
]

for (let user of users)
{
  console.log(`${user.name} works with ${user.stack[0]} and ${user.stack[1]} `)
}
