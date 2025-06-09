/* ------ RANDOM CODES ------ */
// Function to generate combination of characters
function generateCode() {
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    var generated = '';
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length);
        generated += str.charAt(char);
    }
    return generated;
}

// Store generated code globally so it can be checked later
var code = generateCode();

// Display the code on the page
document.getElementById("codes").innerHTML = code;

/* ------ DISABLE BUTTON INITIALLY ------ */
function disableButtonInit() {
    document.getElementById("submit").disabled = true;
}
disableButtonInit();

/* ------ USER INPUT VALIDATION ------ */
var getCode = ''; // to store entered code
var btnvalue; // to store the button state

function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue === true) {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode() {
    getCode = document.getElementById("codeentered").value.trim();
    var currentCode = document.getElementById("codes").innerText.trim();

    if (getCode === currentCode && getCode.length === currentCode.length) {
        btnvalue = false;
    } else {
        btnvalue = true;
    }
    disableButton(btnvalue);
}
