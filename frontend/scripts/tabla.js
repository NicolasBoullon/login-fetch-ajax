//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
// import { getMonstruos } from "./ajax.js";
import { getUsuarios_fetch } from "./fetch.js";

const crearTabla = (data) => {
    const tabla = document.createElement("table");
    if (!Array.isArray(data)) return null;
    // console.log("DATA " + data[0][0]);
    let nuevaData = data[0];
    tabla.appendChild(crearCabecera(nuevaData[0]));
    tabla.appendChild(crearCuerpo(nuevaData));

    return tabla;
}

const crearCabecera = (elemento) => {
    const tHead = document.createElement("thead");
    const headRow = document.createElement("tr");
    // headRow.style.setProperty("background-color", color);
    for (const key in elemento) {
        // if (key === "id") continue;
        const th = document.createElement("th");
        th.textContent = key;
        headRow.appendChild(th);
    }

    tHead.appendChild(headRow);

    return tHead;
}

const crearCuerpo = (data) => {
    if (!Array.isArray(data)) return null;

    const tBody = document.createElement("tbody");
    data.forEach((elemento, index) => {
        const tr = document.createElement("tr");
        if (index % 2 === 0) {
            tr.classList.add("rowPar")
        }
        for (const key in elemento) {
            // if (key === "id") {
            //     tr.dataset.id = elemento[key];
            // } else {
                {
                const td = document.createElement("td");
                td.textContent = elemento[key];
                tr.appendChild(td);
            }
        }
        tBody.appendChild(tr);
    })
    return tBody;
}

export const actualizarTabla = (contenedor,usuarios) => {
    while (contenedor.hasChildNodes()) {
        contenedor.removeChild(contenedor.firstElementChild);
    }

    // console.log(JSON.stringify(usuarios));

    // setTimeout(()=>{
        // let tabla = crearTabla(usuarios);
        // console.log(tabla);
        contenedor.appendChild(crearTabla(usuarios));
    // },2000);
    // console.log("user" + JSON.stringify(usuarios));
    // console.log(usuarios[0]);
    // console.log(usuarios[1]);
    // console.log(tabla);
}
