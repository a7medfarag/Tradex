var usernama = document.forms["vform"]["nama"];
var email = document.forms["vform"]["email"];

var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");


usernama.addEventListener("blur", verifikasiNama, true);
email.addEventListener("blur", verifikasiEmail, true);
usernama.addEventListener("focus", namaJajal, true);

function Validate() {
    if (usernama.value == "") {
        usernama.style.border = '1px solid red';
        name_error.textContent = 'Username Empty';
        usernama.focus();
    }
    if (email.value == "") {
        email.style.border = '1px solid red';
        email_error.textContent = "email empty";
        email.focus();
    }
    
    return false;
}

function verifikasiNama() {
    if (usernama.value != "") {
        usernama.style.border = '1px solid silver';
        name_error.innerHTML = "";
        return true;
    }
}
function verifikasiEmail() {
    if (email.value != "") {
        email.style.border = '1px solid silver';
        email_error.innerHTML = "";
        return true;
    }
}
function verifikasiPasswd() {
    if (password.value != "") {
        password.style.border = '1px solid silver';
        passwd_error.innerHTML = "";
        return true;
    }
}



