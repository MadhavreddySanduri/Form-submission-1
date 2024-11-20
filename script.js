document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.querySelector('input[name="gender"]:checked')
        ? document.querySelector('input[name="gender"]:checked').value
        : '';
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    // Get food options
    let foodChoices = [];
    if (document.getElementById("food1").checked) foodChoices.push("Pizza");
    if (document.getElementById("food2").checked) foodChoices.push("Burger");
    if (document.getElementById("food3").checked) foodChoices.push("Pasta");
    if (document.getElementById("food4").checked) foodChoices.push("Salad");
    if (document.getElementById("food5").checked) foodChoices.push("Ice Cream");

    // Ensure at least 2 food options are selected
    if (foodChoices.length < 2) {
        alert("Please select at least 2 food items.");
        return;
    }

    // Append data to the table
    let tableBody = document.getElementById("tableBody");
    let newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foodChoices.join(", ")}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Clear form fields
    document.getElementById("form").reset();
});
