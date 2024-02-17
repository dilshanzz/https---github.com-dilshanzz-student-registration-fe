document.getElementById("btn-proceed").
        addEventListener("click", proceed)
const toastElement = document.getElementById("to")
        
function proceed() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let contact = document.getElementById("contact").value

    let studentReq= {
        "firstName" : firstName,
         "lastName" : lastName,
        "contact" : contact
    }

    fetch("http://localhost:8080/student/add",{
        method: "POST",
        body: JSON.stringify(studentReq),
       headers:{
        "Content-Type":"application/json"
       }
    })
    .then((response) => response.json())
    .then((data) =>{

    })
     console.log(studentReq);
     document.getElementById("first-name").value = "";
     document.getElementById("last-name").value="" ;
     document.getElementById("contact").value="";

     const toastBootstrap = new bootstrap.Toast(toastElement); 
     toastBootstrap.show();    
    
}

