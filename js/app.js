document.getElementById("btn-proceed").addEventListener("click", proceed)

function proceed() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;

    console.log(firstName);
    console.log(lastName);
}