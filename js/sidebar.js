const sidebarHTML = `
<div class="sidebar">

    <div class="logo-section">

        <a href="index.html" class="transitops-sidebar-home-link">

            <h1 class="logo">
                <span>Transit</span>Ops
            </h1>

            <p>Smart Fleet Management</p>

        </a>

    </div>

    <ul class="menu">

        <li><a href="dashboard.html">Dashboard</a></li>

        <li><a href="vehicles.html">Fleet Registry</a></li>

        <li><a href="drivers.html">Drivers</a></li>

        <li><a href="trips.html">Dispatcher</a></li>

        <li><a href="maintenance.html">Maintenance</a></li>

        <li><a href="expenses.html">Expenses</a></li>

        <li><a href="analytics.html">Analytics</a></li>

        <li><a href="settings.html">⚙ Settings</a></li>

        <li>
            <a href="#" id="logoutBtn">
                Logout
            </a>
        </li>

    </ul>

</div>
`;

document.getElementById("sidebar-container").innerHTML = sidebarHTML;

/* Login Protection */

if(localStorage.getItem("loggedIn") !== "true"){
    window.location.href = "login.html";
}

/* Logout */

const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            localStorage.removeItem("loggedIn");
            localStorage.removeItem("currentUser");

            window.location.href = "login.html";

        }
    );

}