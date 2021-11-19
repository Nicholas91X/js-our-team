const arrayEmployees = [
    {
        nameUtente: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        nameUtente: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        nameUtente: "Angela Lopez",
        role: "Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        nameUtente: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        nameUtente: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];

for (i = 0; i < arrayEmployees.length; i++) {
    createCard(arrayEmployees[i]);
}

// programma per iserire le cards
let nameUtente = "";
let role = "";
let image = "";
let file = "";

const addMember = document.getElementById("addMemberButton").addEventListener("click", function () {
    getData();
    console.log(arrayEmployees);
})

function getData() {
    nameUtente = document.getElementById("name").value;
    role = document.getElementById("role").value;
    image = document.getElementById("image").value;
    file = {nameUtente,role,image};
    arrayEmployees.push(file);
    createCard(file); 
    console.log(file);    
    return file;  
}

function createCard(file) {
    document.querySelector(".team-container").innerHTML += `<div class="team-card">
            <div class="card-image">
            <img src="img/${file.image}"/></div>
            <div class="card-text">
            <h3>${file.nameUtente}</h3>
            <p>${file.role}</p></div></div>`;
}

