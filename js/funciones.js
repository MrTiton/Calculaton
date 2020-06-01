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
    
    function Addiction(a, b) {
        return a + b;  
    }

    function Subtraction(a, b) {
        return a - b;
    }

    function Multiplication(a, b) {
        return a * b;
    }

    function Division(a, b) {
        return a / b;
    }
    
    function ResolveForMe() {

        if (document.getElementById("firstValue").value == '' && document.getElementById("secondValue").value == '') {
            window.alert("Please inform the values !");
        } else if (document.getElementById("firstValue").value == '') { 
            window.alert("Please inform the first value !");
        } else if (document.getElementById("secondValue").value == '') {
            window.alert("Please inform the second value !");
        } else {
            let a = parseFloat(document.getElementById("firstValue").value);
            let b = parseFloat(document.getElementById("secondValue").value);
            
            if (GetClassName('.dropbtn').textContent === "Adiction(+)") {
                document.getElementById("result").innerHTML = Addiction(a, b);  
                // GetClassName('.dropbtn').textContent = 'Operation';  
            } else if (GetClassName('.dropbtn').textContent === "Subtraction(-)") {
                document.getElementById("result").innerHTML = Subtraction(a, b);    
                // GetClassName('.dropbtn').textContent = 'Operation';
            } else if (GetClassName('.dropbtn').textContent === "Multiplication(*)") {
                document.getElementById("result").innerHTML = Multiplication(a, b);    
                // GetClassName('.dropbtn').textContent = 'Operation';
            } else if (GetClassName('.dropbtn').textContent === "Division(/)") {
                document.getElementById("result").innerHTML = Division(a, b);    
                // GetClassName('.dropbtn').textContent = 'Operation';
            } else {
                window.alert("The operator selected is invalid !");
            }
        }       
    }