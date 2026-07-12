let vehicles =
JSON.parse(
    localStorage.getItem("vehicles")
) || [];

let form =
document.getElementById("vehicleForm");

document.getElementById(
    "addVehicleBtn"
).onclick = function(){

    form.classList.toggle(
        "hidden"
    );
};

document.getElementById(
    "saveBtn"
).onclick = function(){

    let vehicle = {

        regNo:
        document.getElementById(
            "regNo"
        ).value,

        model:
        document.getElementById(
            "model"
        ).value,

        type:
        document.getElementById(
            "type"
        ).value,

        capacity:
        document.getElementById(
            "capacity"
        ).value,

        status:
        document.getElementById(
            "status"
        ).value
    };

    if(
        vehicle.regNo === "" ||
        vehicle.model === ""
    ){
        alert(
            "Fill all required fields"
        );
        return;
    }

    vehicles.push(vehicle);

    localStorage.setItem(
        "vehicles",
        JSON.stringify(
            vehicles
        )
    );

    renderVehicles();

    document.getElementById(
        "regNo"
    ).value="";

    document.getElementById(
        "model"
    ).value="";

    document.getElementById(
        "type"
    ).value="";

    document.getElementById(
        "capacity"
    ).value="";
};

function renderVehicles(){

    let table =
    document.getElementById(
        "vehicleTable"
    );

    table.innerHTML = "";

    for(
        let i=0;
        i<vehicles.length;
        i++
    ){

        table.innerHTML += `
        <tr>
            <td>${vehicles[i].regNo}</td>
            <td>${vehicles[i].model}</td>
            <td>${vehicles[i].type}</td>
            <td>${vehicles[i].capacity}</td>
            <td>${vehicles[i].status}</td>

            <td>
                <button
                class="delete-btn"
                onclick="deleteVehicle(${i})">
                Delete
                </button>
            </td>
        </tr>
        `;
    }
}

function deleteVehicle(index){

    vehicles.splice(index,1);

    localStorage.setItem(
        "vehicles",
        JSON.stringify(
            vehicles
        )
    );

    renderVehicles();
}

renderVehicles();