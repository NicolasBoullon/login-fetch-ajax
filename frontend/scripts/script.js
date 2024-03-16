import { getUsuarios_fetch ,loginUser_fetch} from "./fetch.js";
import {actualizarTabla} from "./tabla.js"
const form_login = document.getElementById("form-login");
const form_register = document.getElementById("form-register");

const div_tabla_container = document.getElementById("div-container-table");
document.getElementById("btn-registrarme").addEventListener("click", function (e) {
    e.preventDefault();
    form_login.classList.toggle("oculto");
    form_register.classList.toggle("oculto");
  });

document.getElementById("btn-volver").addEventListener("click", function (e) {
  e.preventDefault();
  form_login.classList.toggle("oculto");
  form_register.classList.toggle("oculto");
});


document.getElementById("btn-getUsuarios").addEventListener("click", async function (e) {
  e.preventDefault();
  let data = await getUsuarios_fetch();
  console.log(data);
  // const usuarios = await getUsuarios_fetch();
  // console.log(usuarios);
  // try {
     actualizarTabla(div_tabla_container,data);
  // } catch (error) {
  //   console.error("Error:", error);
  // }
});

document.getElementById("btn-login-user").addEventListener("click",async function(e){
  e.preventDefault();
  const user_encontrado = await loginUser_fetch(form_login);
  if(user_encontrado == true){

    location.href ="./login.html";
  }
})

