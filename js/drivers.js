let drivers = getData("drivers");

let table = document.getElementById("driverTable");

renderDrivers();

document.getElementById("showFormBtn").onclick = function(){

    document
    .getElementById("driverForm")
    .classList.toggle("hidden");

};

document.getElementById("saveDriverBtn").onclick = function(){

    let driver = {

        name:
        document.getElementById("driverName").value,

        license:
        document.getElementById("licenseNo").value,

        category:
        document.getElementById("licenseType").value,

        expiry:
        document.getElementById("expiryDate").value,

        contact:
        document.getElementById("contact").value,

        safety:
        document.getElementById("safetyScore").value,

        status:
        document.getElementById("driverStatus").value
    };

    drivers.push(driver);

    saveData("drivers",drivers);

    renderDrivers();

};

document.getElementById("searchDriver")
.addEventListener("input",function(){

    let text=this.value.toLowerCase();

    let filtered=[];

    for(let i=0;i<drivers.length;i++){

        if(
            drivers[i].name.toLowerCase().includes(text)
        ){

            filtered.push(drivers[i]);

        }

    }

    renderDrivers(filtered);

});

function renderDrivers(data=drivers){

    table.innerHTML="";

    for(let i=0;i<data.length;i++){

        let statusClass="";

        if(data[i].status==="Available"){
            statusClass="available";
        }

        if(data[i].status==="On Trip"){
            statusClass="trip";
        }

        if(data[i].status==="Off Duty"){
            statusClass="off";
        }

        if(data[i].status==="Suspended"){
            statusClass="suspended";
        }

        table.innerHTML+=`
        <tr>

            <td>${data[i].name}</td>

            <td>${data[i].license}</td>

            <td>${data[i].category}</td>

            <td>${data[i].expiry}</td>

            <td>${data[i].contact}</td>

            <td>${data[i].safety}%</td>

            <td class="${statusClass}">
                ${data[i].status}
            </td>

            <td>
                <button onclick="deleteDriver(${i})">
                    Delete
                </button>
            </td>

        </tr>
        `;
    }
}

function deleteDriver(index){

    drivers.splice(index,1);

    saveData("drivers",drivers);

    renderDrivers();

}