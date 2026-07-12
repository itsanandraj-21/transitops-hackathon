let vehicles =
JSON.parse(
    localStorage.getItem("vehicles")
) || [];

let maintenance =
JSON.parse(
    localStorage.getItem("maintenance")
) || [];

const vehicleSelect =
document.getElementById("vehicleSelect");

loadVehicles();

renderMaintenance();

function loadVehicles(){

    vehicleSelect.innerHTML =
    "<option>Select Vehicle</option>";

    vehicles.forEach((vehicle,index)=>{

        vehicleSelect.innerHTML += `
        <option value="${index}">
            ${vehicle.regNo}
        </option>
        `;
    });
}
document
.getElementById("saveBtn")
.addEventListener("click",function(){

    const vehicleIndex =
    vehicleSelect.value;

    const record = {

        vehicle:
        vehicles[vehicleIndex].regNo,

        service:
        document.getElementById(
            "serviceType"
        ).value,

        cost:
        document.getElementById(
            "cost"
        ).value,

        date:
        document.getElementById(
            "date"
        ).value,

        status:
        document.getElementById(
            "status"
        ).value
    };

    maintenance.push(record);

    localStorage.setItem(
        "maintenance",
        JSON.stringify(maintenance)
    );

    if(record.status==="In Shop"){
        vehicles[vehicleIndex].status =
        "In Shop";
    }

    if(record.status==="Completed"){
        vehicles[vehicleIndex].status =
        "Available";
    }

    localStorage.setItem(
        "vehicles",
        JSON.stringify(vehicles)
    );

    renderMaintenance();

});
function renderMaintenance(){

    const serviceList =
    document.getElementById(
        "serviceList"
    );

    serviceList.innerHTML = "";

    maintenance.forEach(record=>{

        serviceList.innerHTML += `
        <div class="log-card">

            <h3>${record.vehicle}</h3>

            <p>${record.service}</p>

            <p>₹${record.cost}</p>

            <p>${record.date}</p>

            <span class="
            status
            ${
                record.status==="Completed"
                ?
                "complete-status"
                :
                "shop-status"
            }">

                ${record.status}

            </span>

        </div>
        `;
    });
}
if(
    localStorage.getItem(
        "loggedIn"
    ) !== "true"
){
    window.location.href =
    "login.html";
}