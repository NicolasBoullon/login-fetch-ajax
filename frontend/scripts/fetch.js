const form_register = document.getElementById("form-register");
const form_login = document.getElementById("form-login");

form_register.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(this);
  postUsuario_fetch(this);
  // console.log("ASD");
});


// form_login.addEventListener("submit", function (e) {
//   e.preventDefault();
//   // console.log(form_login.nombreUsuario.value);
//   console.log("ASD");
//   let res = loginUser_fetch(this);

//   // console.log(typeof info);  
// });



//----------------------------------------------THEN CATCH
// function postUsuario_fetch(nuevoUsuario) {
//   const URL = "../../login/backend/index.php";
//   fetch(URL, {
//     method: "POST",
//     body: nuevoUsuario,
//   })
//     .then((response) => response.text())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => console.error("Error:", error));
// }

//----------------------------------------------ASYNC AWAIT
async function postUsuario_fetch(nuevoUsuario) {
  const URL = "../../login/backend/index.php";
  const formData = new FormData(nuevoUsuario);
  formData.append("accion", "postUser");
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: formData,
    });
    const data = await response.text(); // o response.json() si esperas JSON
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// async function loginUser_fetch(loginUsuario){
//   const URL = "../../login/backend/index.php";
//   // console.log("NOMBREUSUARIO" + loginUsuario.nombreUsuario.value);

//   const formData = new FormData(loginUsuario);
//   // console.log("NOMBREUSUARIO" + loginUsuario.nombreUsuario.value);
//   formData.append("accion", "loginUser");
//   // console.log(formData);
//   try{
//     const res = await fetch(URL,{
//       method: "POST",
//       body: formData,
//     });
//     console.log(res);
//     const data = await res.json();
//     console.log("DATA" + data);
//     return data;
//   }catch(error){
//     console.error("Error:",error);
//   }
// }
async function loginUser_fetch(loginUsuario){
  const URL = "../../login/backend/index.php";
  const formData = new FormData(loginUsuario);
  formData.append("accion", "loginUser");
  try {
    const res = await fetch(URL, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) {
      throw new Error("Error!");
    }
    const data = await res.json(); // Parsea la respuesta como JSON
    console.log("DATA:", data); 
    return data[0]; 
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getUsuarios_fetch() {
  const URL = "../../login/backend/index.php";
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data =  await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}


export {getUsuarios_fetch,loginUser_fetch};