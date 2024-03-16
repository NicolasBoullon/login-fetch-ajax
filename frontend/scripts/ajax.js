const form = document.getElementById("form-register");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  postUsuario_ajax(formData);
});

function postUsuario_ajax(nuevoUsuario) {
  const xhr = new XMLHttpRequest(); // el xhr puede variar, podria ser "peticion" por ej
  const URL = "../../login/backend/index.php";
  //setear el evento ready state change. Tiene cinco valores. si vale 4, significa q
  //recibimos la respuesta del sv
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        // const data = JSON.parse(xhr.responseText);
        const data = xhr.responseText;
        console.log(data);
      } else {
        console.error(`Error ${xhr.status}: ${xhr.statusText}`);
      }
    }
  };

  xhr.open("POST", URL, true);

  //seteo la cabecera
  // xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");

  //enviar la peticion
  try {
    // por si falla otra cosa
    // xhr.send(JSON.stringify(nuevoUsuario));
    xhr.send(nuevoUsuario);
  } catch (err) {
    console.error(err);
  }
}
