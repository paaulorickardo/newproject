//Inserir ul vazia
const transactionUl = document.querySelector('#transactions')

//Criando Array de transações
const dummyTransactions = [
    {id: 1, name: 'Bolo de brigadeiro', amount: -20},
    {id: 2, name: 'Salário', amount: 300},
    {id: 3, name: 'Torta de frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150}
]

//Criando funções para adicionar as transações no DOM
//Intetação Crt + K + F
const addTransactionIntoDOM = transaction => {
   //criação do operador Matemático
    const operator = transaction.amount < 0 ? '-' : '+' //Se menor que 0 - se não +
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus' //Criando uma classe
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement()//Criando um novo elemento no HTML
    
    li.classList.add(CSSClass)
    li.innerHTML = `
    ${transaction.name} <span>${operator} R$ ${amountWithoutOperator} </span><button class="delete-btn">x</button>  
    `   //Math.abs retorna o valor do numero independente se é + ou -
    transactionsUl.append(li) // append recebe como filho o ultimo elemento encadeado transactionsUl, a transação mais recente vai ser inserida
   
}

const init = () => {
    dummyTransactions.forEach(addTransactionIntoDOM)
}


init ()