let form = document.querySelector("#menu-form");
let input = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");

function handleSubmit(event) {
    event.preventDefault();
    let menu = JSON.parse(input.value);
    count.textContent = "We have " + menu.length + " items today."
}

form.addEventListener("submit", handleSubmit);

menuText.textContent = "";
for (let i = 0; i <menu.length; i++) {
    menuText.textContent = 
        menuTextContent + menu[i].name " - $" + menu[i]price "\n"
}
