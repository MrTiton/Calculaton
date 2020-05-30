function soma(a, b) {
    return a + b;  
}

function resultador() {
    let a = parseFloat(document.getElementById("firstValue").value);
    let b = parseFloat(document.getElementById("secondValue").value);
    document.getElementById("result").innerHTML = soma(a, b);    
}

function openDropdown() {
    document.getElementsByClassName("dropdown-content").style.display = "block";
}