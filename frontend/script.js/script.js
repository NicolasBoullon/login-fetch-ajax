
const form_login = document.getElementById("form-login");
const form_register = document.getElementById("form-register");

document.getElementById("btn-registrarme").addEventListener("click",function(e){
    e.preventDefault();
    form_login.classList.toggle("oculto");
    form_register.classList.toggle("oculto");

})

document.getElementById("btn-volver").addEventListener("click",function(e){
    e.preventDefault();
    form_login.classList.toggle("oculto");
    form_register.classList.toggle("oculto");

})