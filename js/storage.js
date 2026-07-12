// Get data from localStorage
function getData(key) {
    let data = localStorage.getItem(key);

    if (data === null) {
        return [];
    }

    return JSON.parse(data);
}

// Save data to localStorage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Add single item
function addItem(key, item) {
    let data = getData(key);

    data.push(item);

    saveData(key, data);
}

// Delete item by index
function deleteItem(key, index) {
    let data = getData(key);

    data.splice(index, 1);

    saveData(key, data);
}

// Update item by index
function updateItem(key, index, newData) {
    let data = getData(key);

    data[index] = newData;

    saveData(key, data);
}

// Clear a complete collection
function clearData(key) {
    localStorage.removeItem(key);
}
if(
    localStorage.getItem(
        "loggedIn"
    ) !== "true"
){
    window.location.href =
    "login.html";
}