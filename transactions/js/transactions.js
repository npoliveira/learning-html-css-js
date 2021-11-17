let _transactions = [
    {
        id: 105578,
        data: '21/10/2021',
        transactionType: {
            name: 'input',
        },
        value: 100.99,
        operator: {
            id: 4503,
            name: "José Carlos",
            category: 'assistente',
        },
    },
    {
        id: 117880,
        data: '25/10/2021',
        transactionType: {
            name: 'output',
        },
        value: 100.99,
        operator: {
            id: 4508,
            name: "Pedro Paulo",
            category: 'assistente',
        },
    },
]

function getTransactions() {
    let response = {
        transactions: _transactions,
    }

    return response;
}
