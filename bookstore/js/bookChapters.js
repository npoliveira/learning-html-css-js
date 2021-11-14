clearTBody(); // Clear the table sample data.
clearTableCaption(); // Clear the sample caption.
let response = getBooks();
let books = response.books;
let book = books[0];
let chapters = book.chapters;

let caption = document.getElementById("book_title");
caption.innerText = book.title;

// let table = document.getElementsByTagName("table")[0]; // Gets the first table in the page
// let table = document.getElementsById("books"); //Gets the table by ID
let tBody = document.getElementById("book_chapters"); // Gets the tbody by ID


for (let i = 0; i < chapters.length; i++) {
    let chapter = chapters[i];

    // creates a new tr (row) for each book.
    let tr = tBody.insertRow();

    // creates a new td (cell for each attribute).
    let tdTitle = tr.insertCell();
    let tdPage = tr.insertCell();

    // fills the each td content.
    tdTitle.innerText = chapter.title;
    tdPage.innerText = chapter.page;
}
