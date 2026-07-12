const sidebarHTML = `
<div class="sidebar">

    <div class="logo-section">
        <h1 class="logo">
            <span>Transit</span>Ops
        </h1>

        <p>Smart Fleet Management</p>
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
    </ul>

</div>
`;

document.getElementById("sidebar-container").innerHTML = sidebarHTML;
if(
    localStorage.getItem(
        "loggedIn"
    ) !== "true"
){
    window.location.href =
    "login.html";
}