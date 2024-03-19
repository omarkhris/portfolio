const form = document.querySelector("form");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");



function sendEmail () {

    const messageBody = `Sender-Name: ${fullName.value} <br> Email: ${email.value} <br> 
    Contact-Phone: ${phone.value} <br> message-context: ${message.value} <br>`;

    
}


// form.addEventListener("submit", (e)=>{
//     e.preventDefault();

//     sendEmail();
// });




