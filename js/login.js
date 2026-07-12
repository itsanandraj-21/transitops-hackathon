document
.getElementById("loginBtn")
.addEventListener(
    "click",
    login
);

function login(){

    const email =
    document.getElementById(
        "email"
    ).value;

    const password =
    document.getElementById(
        "password"
    ).value;

    const user =
    JSON.parse(
        localStorage.getItem(
            "user"
        )
    );

    if(
        user &&
        email === user.email &&
        password === user.password
    ){

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

        window.location.href =
        "dashboard.html";
    }
    else{
        alert(
            "Invalid Email or Password"
        );
    }
}