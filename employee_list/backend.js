let add = document.getElementById("add");
let reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    document.getElementById("message").value = "";
});

add.addEventListener("click", () => {
    let message = document.getElementById("message").value;
    let existingData = JSON.parse(localStorage.getItem('myData')) || [];
    existingData.push(message);
    localStorage.setItem('myData', JSON.stringify(existingData));
    displayMessage(message); // Call function to display message
});

window.onload = function () {
    const storedData = JSON.parse(localStorage.getItem('myData')) || [];
    storedData.forEach(message => {
        displayMessage(message); // Call function to display message
    });
};

function displayMessage(message) {
    let list = document.getElementById("list");
    let listItem = document.createElement('div');
    listItem.innerHTML = `
    <div style="background-color: rgb(255, 255, 255); width: 100%; height: 70px; box-shadow: 0px 0px 20px black; border-radius: 20px; color: black; display: flex; align-items: center; justify-content: space-around;">
        <ul style="margin-top: 20px; width: 80%;">
            <li>${message}</li>
        </ul>
        <div class="button2" onclick="deleteItem(this)" style="width: 20%; margin: auto auto; display: flex; align-items: center; justify-content: space-around;">
            <img src="delete.png" alt="" style="height: 40px; width: 40px">
        </div>
    </div>
    <br>`;
    list.appendChild(listItem);
}

function deleteItem(button) {
    let listItem = button.parentNode.parentNode;
    let message = listItem.querySelector('li').innerText;
    let storedData = JSON.parse(localStorage.getItem('myData')) || [];
    storedData = storedData.filter(item => item !== message);
    localStorage.setItem('myData', JSON.stringify(storedData));
    listItem.remove();
}