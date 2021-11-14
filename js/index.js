function clearTBody(tBody) {

    if (tBody == undefined) {
        // clearTBody was called without arguments,
        // so, first, gets the first table in the document.

        // Returns all tables from the document.
        let tables = document.body.getElementsByTagName('table');

        if (tables.length == 0) {
            return;
        }

        // Gets the first table and the the tBodies
        let table = tables[0];
        let tBodies = table.tBodies;

        if (tBodies.length == 0) {
            return;
        }

        // Gets the first tBody.
        tBody = tBodies[0];
    }

    tBody.innerHTML = ""; // Clear the content of tBody.
}