document.getElementById("btn-proceed").
        addEventListener("click", proceed)

function proceed() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let contact = document.getElementById("contact").value

    let studentReq= {
        "firstName" : firstName,
         "lastName" : lastName,
        "contact" : contact
    }

    fetch("http://localhost:8080/student",{
        method: "POST",
        body: JSON.stringify(studentReq),
       headers:{
        "Content-Type":"application/json"
       }
    })
    .then((response) => response.JSON())
    .then((data) =>{

    })
     console.log(studentReq);
    // console.log(lastName);
}