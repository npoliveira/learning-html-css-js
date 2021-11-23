clearTBody(); // Clear the Table

let response = getVaccinationCard();
let vaccinationCard = response.vaccinationCard;

let pName = document.getElementById("card_name");
let pAddress = document.getElementById("card_address");
let pBirthday = document.getElementById("card_birthday");

pName.innerText = vaccinationCard.name;
pAddress.innerText = vaccinationCard.address;
pBirthday.innerText = vaccinationCard.birthday;

let tBody = document.getElementById("vac_details");

let vaccines = vaccinationCard.vaccines;
for (let i = 0; i < vaccines.length; i++) {
    let vaccine = vaccines[i];
    let laboratory = vaccine.laboratory;

    let tr = tBody.insertRow();

    let tdId = tr.insertCell();
    let tdName = tr.insertCell();
    let tdLaboratory = tr.insertCell();
    let tdDate = tr.insertCell();
    let tdNext = tr.insertCell();
    let tdLot = tr.insertCell();

    tdId.innerText = vaccine.id;
    tdName.innerText = vaccine.name;
    tdLaboratory.innerText = `${laboratory.id} - ${laboratory.name}`;
    tdDate.innerText = vaccine.date;
    tdNext.innerText = vaccine.next;
    tdLot.innerText = vaccine.lot;
}

let tdTotal = document.getElementById("vac_total");
tdTotal.innerText = vaccines.length;




