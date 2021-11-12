function clearTBody(tBody) {

    if (tBody == undefined) {
        let tables = document.body.getElementsByTagName('table');
        let table = tables[0];
        let tBodies = table.tBodies;
        tBody = tBodies[0];
    }
    tBody.innerHTML = "";

}