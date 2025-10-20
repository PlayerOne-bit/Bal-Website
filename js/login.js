
const inputs = document.querySelectorAll("input");

inputs.forEach(function(input) {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") login();
    });
});
function login(){
    const USERNAME = document.getElementById("username").value;
    const PASSWORD = document.getElementById("password").value;
    const ERROR = document.querySelector("p");

    if((USERNAME==="Sydney Caratao" || 
        USERNAME==='Sydney Marie Caratao' ||
        USERNAME==='Sydney Marie Caratao Claudio') 
        && PASSWORD==="10212005")
    {
        sessionStorage.setItem("I'm Inside","true");
        window.location.href='./index.html';
    }else{
        ERROR.innerText="Wrong username or password";
        inputs.forEach((e)=>{e.style.borderColor='red'});
    }

}

