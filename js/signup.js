document
.getElementById("signupBtn")
.addEventListener(
    "click",
    signup
);

function signup(){

    const user = {

        name:
        document.getElementById(
            "name"
        ).value,

        email:
        document.getElementById(
            "email"
        ).value,

        password:
        document.getElementById(
            "password"
        ).value,

        role:
        document.getElementById(
            "role"
        ).value
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    alert(
        "Account Created"
    );

    window.location.href =
    "login.html";
}