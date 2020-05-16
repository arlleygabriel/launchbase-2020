const nome = 'Mayk'
const sexo = 'M'
const idade = 77
const contribuicao = 35

function checkRetirement (name, sex, age, contributionTime) 
{
  if (sex == 'F' && contributionTime >=30 && age + contributionTime >= 85)
  {
    return console.log(`${name}, você pode se aposentar!`)
  }
  
  else if(sex == 'M' && contributionTime >= 35 && age + contributionTime >= 95)
  {
    return console.log(`${name}, você pode se aposentar!`)
  }
  
  else
  {
    return console.log(`${name}, você não pode se aposentar!`)
  }
}

checkRetirement(nome, sexo, idade, contribuicao)