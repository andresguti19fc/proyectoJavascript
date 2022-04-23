
let nombres = "";
let nombresList = [];
//agg articulos


document
  .getElementById("formAgregarArticulos")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.getElementById("nombreFormAgregar").value;
    let precio = document.getElementById("precioFormAgregar").value;

    (nombre === "" || precio === "") ? swal.fire("Por favor, ingrese todos los datos.", "", "warning") : swal.fire("Articulo agregado", "", "success");

    /* if (nombre === "" || precio === "") {
      swal.fire("Por favor, ingrese todos los datos.", "", "warning");
    } else {
      swal.fire("Articulo agregado", "", "success"); */
      const articulosNombres = {
        nombre: nombre,
        precio: precio,
      };
      nombresList.push(articulosNombres);
      mostrarArticulosenHtml();
      document.getElementById("formAgregarArticulos").reset();
  });

function mostrarArticulosenHtml() {
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  for (let i = 0; i < nombresList.length; i++) {
    tbody.innerHTML += 
    `
    <tr id="${i}">
    <td>${nombresList[i].nombre}</td>
    <td>${nombresList[i].precio}</td>
    <td><button class="btn btn-outline-danger" onclick="eliminarArticulos2(${i})" id="${nombresList[i].nombre}">Eliminar</button></td>
    </tr>
    `;
  }
}

function eliminarArticulos2(i) {
  const tr = document.getElementById(`${i}`);
  tr.innerHTML = "";
  nombresList.splice(i, 1);
  mostrarArticulosenHtml();
}

// agregar articulos

/* let btnAgregarArticulo = document.getElementById("btnAgregarArticulo");
btnAgregarArticulo.addEventListener("click", () => {
  let nombre = document.getElementById("inputAgregarArticulo").value;
  let precio = document.getElementById("inputAgregarPrecio").value;
  let imagen = document.getElementById("inputAgregarArticulo").value;
  let cantidad = document.getElementById("inputAgregarCantidad").value;
  let id = document.getElementById("inputAgregarId").value;
  let producto = {
    nombre: nombre,
    precio: precio,
    imagen: imagen,
    cantidad: cantidad,
    id: id,
  };
  mostrarArticulosenHtml();
 
}); */
