function SignIn(){

    const user = "admin";
    const pass = "12345";

    let usernameData = document.getElementById("user").value;
    let passwordData = document.getElementById("pass").value;
    let feedback = document.getElementById("fb");

    if (usernameData === user && passwordData === pass) {
        document.getElementById("fb").innerHTML = "Access Granted!";
    }

    if (usernameData === user && passwordData === pass) {
        window.alert("Success!");
        return;
    }

    if (usernameData === "" && passwordData === "") {
        window.alert("Empty Fields.");
        return;
    }

    else {
        window.alert("Incorret username and/or password.");
        return;
    }



}


