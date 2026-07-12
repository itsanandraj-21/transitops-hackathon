const fuelLogs =
JSON.parse(localStorage.getItem("fuelLogs")) || [];

const expenses =
JSON.parse(localStorage.getItem("expenses")) || [];

const maintenance =
JSON.parse(localStorage.getItem("maintenance")) || [];

const vehicles =
JSON.parse(localStorage.getItem("vehicles")) || [];

const fuelCost =
fuelLogs.reduce(
    (sum,item)=>sum + Number(item.cost),
    0
);

const maintenanceCost =
maintenance.reduce(
    (sum,item)=>sum + Number(item.cost),
    0
);

const miscCost =
expenses.reduce(
    (sum,item)=>
    sum +
    Number(item.toll || 0) +
    Number(item.other || 0),
    0
);

const totalCost =
fuelCost +
maintenanceCost +
miscCost;

document.getElementById(
    "fuelCostTable"
).innerText =
`₹${fuelCost}`;

document.getElementById(
    "maintenanceCostTable"
).innerText =
`₹${maintenanceCost}`;

document.getElementById(
    "miscCostTable"
).innerText =
`₹${miscCost}`;

document.getElementById(
    "operationalCost"
).innerText =
`₹${totalCost}`;

document.getElementById(
    "fleetUtilization"
).innerText =
`${vehicles.length ? 81 : 0}%`;

document.getElementById(
    "fuelEfficiency"
).innerText =
`8.4 km/l`;

document.getElementById(
    "vehicleROI"
).innerText =
`14.2%`;