let fuelLogs =
JSON.parse(localStorage.getItem("fuelLogs")) || [];

let expenses =
JSON.parse(localStorage.getItem("expenses")) || [];

let maintenance =
JSON.parse(localStorage.getItem("maintenance")) || [];

let vehicles =
JSON.parse(localStorage.getItem("vehicles")) || [];

loadVehicles();
renderFuelLogs();
renderExpenses();
calculateTotals();

function loadVehicles(){

    let select =
    document.getElementById("fuelVehicle");

    vehicles.forEach(vehicle=>{

        select.innerHTML += `
        <option value="${vehicle.regNo}">
            ${vehicle.regNo}
        </option>
        `;
    });
}

document
.getElementById("saveFuel")
.onclick=function(){

    let fuel = {

        vehicle:
        fuelVehicle.value,

        liters:
        liters.value,

        cost:
        Number(fuelCost.value),

        date:
        fuelDate.value
    };

    fuelLogs.push(fuel);

    localStorage.setItem(
        "fuelLogs",
        JSON.stringify(fuelLogs)
    );

    renderFuelLogs();
    calculateTotals();
};

document
.getElementById("saveExpense")
.onclick=function(){

    let expense={

        trip:
        tripId.value,

        toll:
        Number(toll.value),

        other:
        Number(otherExpense.value)
    };

    expenses.push(expense);

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    renderExpenses();
    calculateTotals();
};

function renderFuelLogs(){

    let table =
    document.getElementById("fuelTable");

    table.innerHTML="";

    fuelLogs.forEach(log=>{

        table.innerHTML += `
        <tr>
            <td>${log.vehicle}</td>
            <td>${log.date}</td>
            <td>${log.liters} L</td>
            <td>₹${log.cost}</td>
        </tr>
        `;
    });
}

function renderExpenses(){

    let table =
    document.getElementById("expenseTable");

    table.innerHTML="";

    expenses.forEach(expense=>{

        table.innerHTML += `
        <tr>
            <td>${expense.trip}</td>
            <td>₹${expense.toll}</td>
            <td>₹${expense.other}</td>
            <td>₹${expense.toll + expense.other}</td>
        </tr>
        `;
    });
}

function calculateTotals(){

    let fuelTotal =
    fuelLogs.reduce(
        (sum,item)=>sum+item.cost,
        0
    );

    let maintenanceTotal =
    maintenance.reduce(
        (sum,item)=>sum+Number(item.cost),
        0
    );

    let miscTotal =
    expenses.reduce(
        (sum,item)=>
        sum+item.toll+item.other,
        0
    );

    let grandTotal =
    fuelTotal+
    maintenanceTotal+
    miscTotal;

    document.getElementById(
        "fuelTotal"
    ).innerText =
    `₹${fuelTotal}`;

    document.getElementById(
        "maintenanceTotal"
    ).innerText =
    `₹${maintenanceTotal}`;

    document.getElementById(
        "miscTotal"
    ).innerText =
    `₹${miscTotal}`;

    document.getElementById(
        "grandTotal"
    ).innerText =
    `₹${grandTotal}`;
}
if(
    localStorage.getItem(
        "loggedIn"
    ) !== "true"
){
    window.location.href =
    "login.html";
}