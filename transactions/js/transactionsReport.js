clearTBody(); // Clear the table sample data.

let response = getTransactions();
let transactions = response.transactions;
let tBody = document.getElementById("transactions_details");

for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];

    let type = transaction.transactionType
    let operator = transaction.operator

    let tr = tBody.insertRow();

    let tdId = tr.insertCell();
    let tdDate = tr.insertCell();
    let tdType = tr.insertCell();
    let tdValue = tr.insertCell();
    let tdNome = tr.insertCell();

    tdId.innerText = transaction.id;
    tdDate.innerText = transaction.data;
    tdType.innerText = type.name;
    tdValue.innerText = transaction.value;
    tdNome.innerText = operator.name;
}