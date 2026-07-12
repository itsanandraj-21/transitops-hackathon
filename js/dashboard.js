console.log("Dashboard Loaded");
if(
    localStorage.getItem(
        "loggedIn"
    ) !== "true"
){
    window.location.href =
    "login.html";
}