let _vaccinationCard = {
    name: 'Pedro Paulo',
    address: 'Rua Fonseca',
    birthday: '15/05/1970',
    vaccines: [
        {
            id: 25874,
            name: 'HPV',
            laboratory: {
                id: 51478,
                name: 'Medley'
            },
            date: '01/11/1990',
            next: '01/11/2010',
            lot: 'kla15879',
        },
        {
            id: 25975,
            name: 'Gripe',
            laboratory: {
                id: 15792547,
                name: 'Pyfzer'
            },
            date: '21/10/2020',
            next: '22/10/2021',
            lot: 'infl5879',
        },
        {
            id: 874123,
            name: 'Hepatite B',
            laboratory: {
                id: 987546,
                name: 'Bayer'
            },
            date: '15/08/2005',
            next: 'dose unica',
            lot: 'pjd6478k',
        },
    ]
}

function getVaccinationCard() {
    let response = {
        vaccinationCard: _vaccinationCard,
    }
    return response;
}

