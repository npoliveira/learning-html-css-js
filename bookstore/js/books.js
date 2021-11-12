let _books = [
    {
        id: 'A1.1',
        title: 'Telc - Deutsch für die Integration',
        isbn: '3946447066',
        publisher: {
            id: 1501,
            name: 'Angioni, Milena',
        },
        publishedAt: 2018,
        chapters: [
            {
                id: 1,
                title: 'Hallo! Wie geht\'s?',
                page: 7,
            },
            {
                id: 2,
                title: 'Meine Familie und ich',
                page: 15,
            },
            {
                id: 3,
                title: 'Im Deutschkurs',
                page: 23,
            },
        ],
    },
    {
        id: 'A1.2',
        title: 'Telc - Deutsch für die Integration',
        isbn: '33946447074',
        publisher: {
            id: 1502,
            name: 'Angioni, Milena; Haelbig, Ines',
        },
        publishedAt: 2019,
        chapters: [
            {
                id: 7,
                title: 'In der Stadt unterwegs',
                page: 7,
            },
            {
                id: 8,
                title: 'Mein Beruf',
                page: 15,
            },
            {
                id: 9,
                title: 'Beim Arzt',
                page: 23,
            },
        ],
    },
];

function getBooks(preticate) {
    const requestDate = new Date();
    const requestId = Math.floor(Math.random() * 10000);

    if (preticate === undefined) {
        preticate = e => true;
    }

    var response = {
        id: requestId,
        date: requestDate,
        books: _books.filter(preticate),
    }

    return response;
}
