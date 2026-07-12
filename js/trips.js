let trips = getData("trips");

let vehicles = getData("vehicles");

let drivers = getData("drivers");

let vehicleSelect =
document.getElementById("vehicleSelect");

let driverSelect =
document.getElementById("driverSelect");

loadDropdowns();

renderTrips();

function loadDropdowns(){

    vehicleSelect.innerHTML =
    "<option>Select Vehicle</option>";

    for(let i=0;i<vehicles.length;i++){

        if(
            vehicles[i].status === "Available"
        ){

            vehicleSelect.innerHTML += `
            <option value="${i}">
                ${vehicles[i].regNo}
                -
                ${vehicles[i].capacity}
            </option>
            `;
        }
    }

    driverSelect.innerHTML =
    "<option>Select Driver</option>";

    for(let i=0;i<drivers.length;i++){

        if(
            drivers[i].status === "Available"
        ){

            driverSelect.innerHTML += `
            <option value="${i}">
                ${drivers[i].name}
            </option>
            `;
        }
    }
}
document.getElementById("cargoWeight")
.addEventListener("input",checkCapacity);

function checkCapacity(){

    let vehicleIndex =
    vehicleSelect.value;

    if(vehicleIndex === "Select Vehicle"){
        return;
    }

    let vehicle =
    vehicles[vehicleIndex];

    let capacity =
    parseInt(vehicle.capacity);

    let cargo =
    parseInt(
        document.getElementById("cargoWeight").value
    );

    if(cargo > capacity){

        document.getElementById(
            "capacityWarning"
        ).innerHTML=
        `
        <div class="warning">
            Capacity exceeded by
            ${cargo-capacity} kg
        </div>
        `;
    }
    else{

        document.getElementById(
            "capacityWarning"
        ).innerHTML="";
    }
}
document.getElementById("dispatchBtn")
.onclick=function(){

    let trip={

        id:"TR"+Date.now(),

        source:
        document.getElementById("source").value,

        destination:
        document.getElementById("destination").value,

        vehicle:
        vehicles[vehicleSelect.value].regNo,

        driver:
        drivers[driverSelect.value].name,

        cargo:
        document.getElementById("cargoWeight").value,

        distance:
        document.getElementById("distance").value,

        status:"Dispatched"
    };

    trips.push(trip);

    saveData("trips",trips);

    vehicles[vehicleSelect.value].status=
    "On Trip";

    drivers[driverSelect.value].status=
    "On Trip";

    saveData("vehicles",vehicles);

    saveData("drivers",drivers);

    renderTrips();

    loadDropdowns();
};
function renderTrips(){

    let tripList =
    document.getElementById("tripList");

    tripList.innerHTML="";

    for(let i=0;i<trips.length;i++){

        tripList.innerHTML += `
        <div class="trip-card">

            <h3>${trips[i].id}</h3>

            <div class="trip-route">
                ${trips[i].source}
                →
                ${trips[i].destination}
            </div>

            <p>
                ${trips[i].vehicle}
                /
                ${trips[i].driver}
            </p>

            <br>

            <span class="status dispatched">
                ${trips[i].status}
            </span>

        </div>
        `;
    }
}