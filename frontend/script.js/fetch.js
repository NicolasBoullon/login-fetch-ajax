
const form = document.getElementById("form-alta");

form.addEventListener("submit",function(e){
    e.preventDefault();
    const formData = new FormData(this);
    crearUsuario_fetch(formData);

})

//----------------------------------------------THEN CATCH
function crearUsuario_fetch(nuevoUsuario){
    const URL = "../../login/backend/index.php"
    fetch(URL, {
        method: 'POST',
        body: nuevoUsuario,
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
}

//----------------------------------------------ASYNC AWAIT
async function crearUsuario_fetch(nuevoUsuario) {
    const URL = "../../login/backend/index.php";
    try {
        const response = await fetch(URL, {
            method: 'POST',
            body: nuevoUsuario,
        });
        const data = await response.text(); // o response.json() si esperas JSON
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function traerUsuarios_fetch(){

}