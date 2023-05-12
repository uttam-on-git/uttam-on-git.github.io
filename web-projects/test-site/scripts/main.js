// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world";

const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
    const name = prompt("Enter a new name");
    para.textContent = `Player 1: ${name}`;
}