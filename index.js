const main = document.getElementById("main");
main.remove();

const header = document.createElement("h4");

header.id = "victory";

header.textContent = "YOUR-NAME is the champion"; 

document.body.appendChild(header);
