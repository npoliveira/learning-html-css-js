clearTBody(); // Clear the table sample data.
let response = getBooks();
let books = response.books;

// let table = document.getElementsByTagName("table")[0]; // Gets the first table in the page
// let table = document.getElementById("books"); // Gets the table by ID
let tBody = document.getElementById("books_items"); // Gets the tbody by ID

for (let i = 0; i < books.length; i++) {
    let book = books[i];

    let publisher = book.publisher;
    let chapters = book.chapters;

    // creates a new tr (row) for each book.
    let tr = tBody.insertRow();

    // creates a new td (cell) for each attribute.
    let tdBook = tr.insertCell();
    let tdAuthor = tr.insertCell();
    let tdPublishedAt = tr.insertCell();
    let tdChapters = tr.insertCell();

    //fills the each td content.
    tdBook.innerText = book.title;
    tdAuthor.innerText = publisher.name;
    tdPublishedAt.innerText = book.publishedAt;
    tdChapters.innerText = chapters.length;
}