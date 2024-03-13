
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;

let countIN = document.getElementById("count-value"); //passing the argument

function increment () {
    count += 1;
    countIN.textContent = count;
}

let savedEN = document.getElementById("save-el");

function save () {
    let entries = count + " - ";
    savedEN.textContent += entries;
    countIN.innerText = 0;
    count = 0;
}

function reset() {
    savedEN.textContent = "Previous entries: "
}