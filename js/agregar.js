
let nombres = "";
var nombresList = [];
//agg articulos


document
  .getElementById("formAgregarArticulos")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.getElementById("nombreFormAgregar").value;
    let precio = document.getElementById("precioFormAgregar").value;

    if (nombre === "" || precio === "") {
      swal.fire("Por favor, ingrese todos los datos.", "", "warning");
    } else {
      swal.fire("Articulo agregado", "", "success");
      const articulosNombres = {
        nombre: nombre,
        precio: precio,
      };
      nombresList.push(articulosNombres);
      console.log(nombresList);
      mostrarArticulosenHtml();
      document.getElementById("formAgregarArticulos").reset();
    }
  });

function mostrarArticulosenHtml() {
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  for (let i = 0; i < nombresList.length; i++) {
    let tr = document.createElement("tr");
    tr.setAttribute("id", `${i}`);
    let tdNombre = document.createElement("td");
    let tdPrecio = document.createElement("td");
    let tdId = document.createElement("td");
    let tdEliminar = document.createElement("td");
    tdNombre.innerHTML += nombresList[i].nombre;
    tdPrecio.innerHTML += nombresList[i].precio;
    tdId.innerHTML += i + 1;
    tdEliminar.innerHTML += `<button class="btn btn-danger" id="btnEliminar" onclick="eliminarArticulos2(${i})">Eliminar</button>`;
    tr.appendChild(tdId);
    tr.appendChild(tdNombre);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdEliminar);
    tbody.appendChild(tr);
  }
}

function eliminarArticulos2(i) {
  const tr = document.getElementById(`${i}`);
  tr.innerHTML = "";
  nombresList.splice(i, 1);
  mostrarArticulosenHtml();
}
