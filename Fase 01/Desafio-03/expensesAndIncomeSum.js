const users = [
  {
    name: "Salvio",
    incomes: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    incomes: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    incomes: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
]

function sumNumbers(number){
  const sum = number.reduce((total, currentElement) => total + currentElement)
  return sum
}

function balanceCalculus (incomes, expenses){
  const totalIncomes = sumNumbers(incomes)
  const totalExpenses = sumNumbers(expenses)

  return totalIncomes - totalExpenses
}

function checkBalance(users){
  for(let i = 0; i < users.length; i++){
    const balance = balanceCalculus(users[i].incomes,users[i].expenses)
    if (balance > 0){
      console.log(`${users[i].name} has a POSITIVE balance of ${balance}`)
    }
    else{
      console.log(`${users[i].name} has a NEGATIVE balance of ${balance}`)
    }
  }

}

checkBalance(users)