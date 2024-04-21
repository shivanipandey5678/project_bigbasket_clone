let authContainer=document.querySelector("#auth");
let login=document.querySelector("#login");
let signup=document.querySelector("#signup"); // Corrected selector

let data=[];

function saveData(data){
    localStorage.setItem("data", JSON.stringify(data));
}

function loadData(){
    let savedData = JSON.parse(localStorage.getItem("data"));
    if(savedData){
        data = savedData;
    }
}

function formhandler(e) {
    e.preventDefault();
    let targetElement = e.target;
    let email = targetElement[0].value;
    let username = targetElement[1].value;
    let password = targetElement[2].value;
    let confirm_pass = targetElement[3].value;
    
    if(password === confirm_pass){
        let obj = {
            user: username,
            email: email,
            pass: password,
        };
        data.push(obj);
        saveData(data); // Save the data to localStorage
        alert("Registration successful");
        window.location.href = "login.html";
    } else {
        alert("Password is not matching");
    }
}

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    formhandler(event);
});

// Load data when script runs
loadData();
