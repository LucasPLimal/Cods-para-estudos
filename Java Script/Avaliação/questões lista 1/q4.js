function valid(){
    email = document.getElementById("email").value;
    if ((email.indexOf("@") > -1) && (email.indexOf(".") > -1)) {
        result = "ta valido"
    }
    else {
        result = "não ta valido"
    }
    document.getElementById("result").innerHTML =
    `Seu email ${result}`
}