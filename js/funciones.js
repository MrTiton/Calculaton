// function soma(a, b) {
//     return a + b;  
// }

// function resultador() {
//     let a = parseFloat(document.getElementById("firstValue").value);
//     let b = parseFloat(document.getElementById("secondValue").value);
//     document.getElementById("result").innerHTML = soma(a, b);    
// }

// function openDropdown() {
//     document.getElementsByClassName("dropdown-content").style.display = "block";
// }

function GetClassName(className) {
    let nameClass = document.querySelector(className);        
    return nameClass
}


//Button Names
function AdictionButton() {    
    GetClassName('.dropbtn').textContent = "Adiction(+)";
}

function SubtractionButton() {
    GetClassName('.dropbtn').textContent = "Subtraction(-)";
}

function MultiplicationButton() {
    GetClassName('.dropbtn').textContent = "Multiplication(*)";
}

function DivisionButton() {
    GetClassName('.dropbtn').textContent = "Division(/)";
}