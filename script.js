let form = document.querySelector("#menu-form");
let input = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");
let specialText = document.querySelector("#special");

function handleSubmit(event) {
    event.preventDefault();
    let menu = JSON.parse(input.value);
    count.textContent = "We have " + menu.length + " items today."

    if (menu.length > 0) {
        specialText.textContent = "Today's special: " + menu[0].name;
    }
    else {
        specialText.textContent = "No special items today.";
    }
menuText.textContent = "";
for (let i = 0; i < menu.length; i++) {
    menuText.textContent = 
        menuText.textContent + menu[i].name + " — $" + menu[i].price + "\n"
    }
}

form.addEventListener("submit", handleSubmit);


