const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
}

function createTransaction(transactionObject, user){
  if(transactionObject.type == 'credit'){
    user.transactions.push(transactionObject)
    user.balance = user.balance + transactionObject.value
  }
  else if(transactionObject.type =='debit'){
    user.transactions.push(transactionObject)
    user.balance = user.balance - transactionObject.value
  }

  
}

function getHigherTransactionByType(transactionType, user){
  let higherValue = 0  
  let higherTransaction
  for (let transactions of user.transactions){
   if(transactions.type == transactionType && transactions.value > higherValue  ){
     higherValue = transactions.value
     higherTransaction = transactions
 }
}
  return higherTransaction
}

function getTransactionsCount(user){
  let transactionsStatics = {
    credit: 0,
    debit:0
  }

  let quantityOfCreditOperations = 0
  
  for (transactions of user.transactions){
    if(transactions.type == 'credit'){
      transactionsStatics.credit = transactionsStatics.credit+1
  }
  else if(transactions.type == 'debit'){
    transactionsStatics.debit = transactions.debit+1
  }
  
}
  return transactionsStatics
}

function getAverageTransactionValue(user){
  let totalValueOfTransactions = 0
  for(transactions of user.transactions){
    totalValueOfTransactions = totalValueOfTransactions + transactions.value
  }
  let averageTransactionValue = totalValueOfTransactions/user.transactions.length
  return averageTransactionValue
}


createTransaction({ type: "credit", value: 50 },user);
createTransaction({ type: "credit", value: 120 }, user);
createTransaction({ type: "debit", value: 80 }, user);
createTransaction({ type: "debit", value: 30 }, user);

console.log(user.balance); // 60

getHigherTransactionByType("credit", user); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit", user); // { type: 'debit', value: 80 }

getAverageTransactionValue(user); // 70

getTransactionsCount(user); // { credit: 2, debit: 2 }