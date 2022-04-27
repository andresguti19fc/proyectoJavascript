
let bbdd =  
  [
    {
      imagen: "camisa.jpg",
      nombre: "camisa",
      precio: 100,
      id: 1,
      cantidad: 0,
    },
    {
      imagen: "pantalon.png",
      nombre: "pantalon",
      precio: 200,
      id: 2,
      cantidad: 0,
    },
    {
      imagen: "zapatos.jpg",
      nombre: "zapatos",
      precio: 300,
      id: 3,
      cantidad: 0,
    },
    {
      imagen: "camisa.jpg",
      nombre: "camisa",
      precio: 100,
      id: 4,
      cantidad: 0,
    },
    {
      imagen: "pantalon.png",
      nombre: "pantalon",
      precio: 200,
      id: 5,
      cantidad: 0,
    },
    {
      imagen: "zapatos.jpg",
      nombre: "zapatos",
      precio: 300,
      id: 6,
      cantidad: 0,
    },
    {
      imagen: "camisa.jpg",
      nombre: "camisa",
      precio: 100,
      id: 7,
      cantidad: 0,
    },
    {
      imagen: "pantalon.png",
      nombre: "pantalon",
      precio: 200,
      id: 8,
      cantidad: 0,
    },
    {
      imagen: "zapatos.jpg",
      nombre: "zapatos",
      precio: 300,
      id: 9,
      cantidad: 0,
    },
    {
      imagen: "camisa.jpg",
      nombre: "camisa",
      precio: 100,
      id: 10,
      cantidad: 0,
    },
    {
      imagen: "pantalon.png",
      nombre: "pantalon",
      precio: 200,
      id: 11,
      cantidad: 0,
    },
    {
      imagen: "zapatos.jpg",
      nombre: "zapatos",
      precio: 300,
      id: 12,
      cantidad: 0,
    },
  ];
  localStorage.setItem("BASEDEDATOS", JSON.stringify(bbdd));
class Basededatos {
  constructor(imagen, nombre, precio, id, cantidad) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
    this.cantidad = cantidad;
  }
}


let BASEDEDATOS = localStorage.getItem("BASEDEDATOS");
let BBDD = JSON.parse(BASEDEDATOS);

let carrito = [];
let total2 = 0;
function renderizarHtml() {
  let tiendaAdicta = document.getElementById("tiendaAdicta");
  
  for (let i = 0; i < BBDD.length; i++) {
    let { imagen, nombre, precio } = BBDD[i]; //destrructuracion
    tiendaAdicta.innerHTML += `
          
          <div class="col-md-4 my-5">
              <div class="card h-100">
              <img class="card-img-top img-fluid" src="images/${imagen}" alt="..." />
                  <div class="card-body p-4">
                  <div class="text-center">
                      <h5 class="card-title">${nombre}</h5>
                      <p class="card-text">
                          <strong>precio:</strong> ${precio}
                      </p>
                      </div>
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent mt-5">
        <div class="text-center"><button class="btn btn-outline-dark mt-auto mensajeComprar" onclick="agregarAlCarrito(${i})" id="${BBDD[i].id}" >Agregar al carrito</button></div>
  
                          </div>
                      
                  </div>
              </div>
          </div>
          
          `;
  }
}
renderizarHtml();
function agregarAlCarrito(i) {

  let producto = BBDD[i];
  let existe = false;
  for (let i = 0; i < carrito.length; i++) {
let { id } = carrito[i];
    if (id === producto.id) {
      existe = true;
      carrito[i].cantidad++;
    }
  }
  if (!existe) {
    producto.cantidad = 1;
    carrito.push(producto);
  }
  carritoAdicta.innerHTML = "";
  renderizarCarrito();
}

let carritoAdicta = document.getElementById(`carritoAdicta`);
carritoAdicta.addEventListener("click", renderizarCarrito);
function renderizarCarrito() {
  for (let i = 0; i < carrito.length; i++) {
    let { nombre, precio, cantidad } = carrito[i];
    let precioTotalprenda = cantidad * precio;
    carritoAdicta.innerHTML += `
    <tr>
    <td>${nombre}</td>
    <td>${cantidad}</td>
    <td>${precio}</td>
    <td id="">${precioTotalprenda}</td>
    <td><button class="btn btn-outline-danger" onclick="eliminarDelCarrito(${i})" id="${id}">Eliminar</button></td>
    <td><button class="btn btn-outline-dark" onclick="comprarCarrito(${i})" id="${id}">Comprar</button></td>   
    </tr>
    </tbody>
`;
}
}
function eliminarDelCarrito(i) {
  carrito.splice(i, 1);
  carritoAdicta.innerHTML = "";
}

function comprarCarrito(i) {
  let { cantidad, precio, } = carrito[i];
  let totalPrenda = cantidad * precio;
  swal.fire("Gracias por comprar",`total a pagar: ${totalPrenda}$`, "success");
  carrito.splice(i, 1);
  carritoAdicta.innerHTML = "";
}
let btnAgregarArticulo = document.getElementById("btnFormAgregar");
btnAgregarArticulo.addEventListener("click", agregar);

 function agregar(nombre, precio, imagen, id, cantidad) {
   nombre.preventDefault();
  
   let imagenInput = document.getElementById("imagenFormAgregar").value;
   imagen = imagenInput;
   let inputAgregarArticulo = document.getElementById("nombreFormAgregar").value;
   nombre=inputAgregarArticulo;   
   let inputAgregarPrecio = document.getElementById("precioFormAgregar").value;
    precio=inputAgregarPrecio;
    cantidad=0;
    (nombre === "" || precio === "" || imagen === "") ? swal.fire("debe llenar todos los campos", "", "warning") : swal.fire("listo. su producto fue agregado.", "", "success");
    id=BBDD.length + 1;
  let nuevoArticulo = new Basededatos(imagen, nombre, precio, id, cantidad);
  BBDD = [...BBDD, nuevoArticulo]; //spread operator
 
  tiendaAdicta.innerHTML = "";
 renderizarHtml();
 localStorage.setItem("BASEDEDATOS", JSON.stringify(BBDD)); 
}







/* let botonAgregarArticulo = document.getElementById("botonAgregarArticulo");
botonAgregarArticulo.addEventListener("click", agregarArticulo);
function agregarArticulo() {
  let nombre = document.getElementById("nombre").value;
  let precio = document.getElementById("precio").value;
  let imagen = document.getElementById("imagen").value;
  let id = document.getElementById("id").value;
  let cantidad = document.getElementById("cantidad").value;
  let nuevoArticulo = new Basededatos(imagen, nombre, precio, id, cantidad);
  BBDD.push(nuevoArticulo);
  localStorage.setItem("BASEDEDATOS", JSON.stringify(BBDD));
  renderizarHtml();
} */