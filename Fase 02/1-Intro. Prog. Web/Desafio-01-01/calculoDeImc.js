const nome = 'Mayk'
const peso = 80
const altura = 1.88

function checkIMC (peso, altura)
{
  imc = peso/(Math.pow(altura,2))

  if (imc >= 30)
  {
     return console.log(`${nome} você está acima do peso`)
  }
  else
  {
    return console.log(`${nome} você não está acima do peso`)
  }
}

checkIMC(peso, altura)

