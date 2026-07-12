// Load vehicles from localStorage
let vehicles = getData("vehicles");

// If first time opening, add demo data
if (vehicles.length === 0) {
    vehicles = [
        {
            regNo: "BR01AB1234",
            model: "Tata Ace Gold",
            type: "Mini Truck",
            capacity: "750 Kg",
            odometer: "74000",
            purchaseCost: "620000",
            fuelType: "Diesel",
            insuranceExpiry: "2027-03-15",
            lastService: "2026-06-01",
            status: "Available"
        },
        {
            regNo: "BR02CD5678",
            model: "Mahindra Bolero Pickup",
            type: "Truck",
            capacity: "1500 Kg",
            odometer: "128000",
            purchaseCost: "920000",
            fuelType: "Diesel",
            insuranceExpiry: "2026-11-20",
            lastService: "2026-05-10",
            status: "On Trip"
        }
    ];

    saveData("vehicles", vehicles);
}

let tableBody = document.getElementById("vehicleTableBody");

renderVehicles(vehicles);

// Show form
document.getElementById("openFormBtn").addEventListener("click", function () {
    document.getElementById("vehicleForm").classList.remove("hidden");
});

// Hide form
document.getElementById("cancelBtn").addEventListener("click", function () {
    document.getElementById("vehicleForm").classList.add("hidden");
});

// Add vehicle
document.getElementById("addVehicleBtn").addEventListener("click", function () {

    let regNo = document.getElementById("regNo").value;
    let model = document.getElementById("model").value;
    let type = document.getElementById("vehicleType").value;
    let capacity = document.getElementById("capacity").value;
    let odometer = document.getElementById("odometer").value;
    let purchaseCost = document.getElementById("purchaseCost").value;
    let fuelType = document.getElementById("fuelType").value;
    let insuranceExpiry = document.getElementById("insuranceExpiry").value;
    let lastService = document.getElementById("lastService").value;
    let status = document.getElementById("vehicleStatus").value;

    if (
        regNo === "" ||
        model === "" ||
        type === ""
    ) {
        alert("Please fill required fields");
        return;
    }

    let vehicle = {
        regNo: regNo,
        model: model,
        type: type,
        capacity: capacity,
        odometer: odometer,
        purchaseCost: purchaseCost,
        fuelType: fuelType,
        insuranceExpiry: insuranceExpiry,
        lastService: lastService,
        status: status
    };

    vehicles.push(vehicle);

    saveData("vehicles", vehicles);

    renderVehicles(vehicles);

    document.getElementById("vehicleForm").reset();

    document.getElementById("vehicleForm").classList.add("hidden");
});

// Search
document.getElementById("searchInput").addEventListener("input", filterVehicles);

// Filter by type
document.getElementById("typeFilter").addEventListener("change", filterVehicles);

// Filter by status
document.getElementById("statusFilter").addEventListener("change", filterVehicles);

function filterVehicles() {

    let searchText = document.getElementById("searchInput").value.toLowerCase();
    let selectedType = document.getElementById("typeFilter").value;
    let selectedStatus = document.getElementById("statusFilter").value;

    let filteredVehicles = [];

    for (let i = 0; i < vehicles.length; i++) {

        let vehicle = vehicles[i];

        let searchMatch =
            vehicle.regNo.toLowerCase().includes(searchText) ||
            vehicle.model.toLowerCase().includes(searchText);

        let typeMatch =
            selectedType === "All" ||
            vehicle.type === selectedType;

        let statusMatch =
            selectedStatus === "All" ||
            vehicle.status === selectedStatus;

        if (searchMatch && typeMatch && statusMatch) {
            filteredVehicles.push(vehicle);
        }
    }

    renderVehicles(filteredVehicles);
}

function renderVehicles(vehicleList) {

    tableBody.innerHTML = "";

    for (let i = 0; i < vehicleList.length; i++) {

        let vehicle = vehicleList[i];

        let statusClass = "";

        if (vehicle.status === "Available") {
            statusClass = "available";
        }
        else if (vehicle.status === "On Trip") {
            statusClass = "trip";
        }
        else if (vehicle.status === "Maintenance") {
            statusClass = "maintenance";
        }
        else {
            statusClass = "retired";
        }

        tableBody.innerHTML += `
            <tr>
                <td>${vehicle.regNo}</td>
                <td>${vehicle.model}</td>
                <td>${vehicle.type}</td>
                <td>${vehicle.capacity}</td>
                <td>${vehicle.fuelType}</td>
                <td>
                    <span class="status ${statusClass}">
                        ${vehicle.status}
                    </span>
                </td>
                <td>
                    <button
                        class="action-btn delete-btn"
                        onclick="removeVehicle(${i})"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        `;
    }
}

function removeVehicle(index) {

    let confirmDelete = confirm(
        "Delete this vehicle?"
    );

    if (!confirmDelete) {
        return;
    }

    vehicles.splice(index, 1);

    saveData("vehicles", vehicles);

    renderVehicles(vehicles);
}