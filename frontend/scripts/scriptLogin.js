

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