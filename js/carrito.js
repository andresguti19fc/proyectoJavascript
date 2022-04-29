
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
/*** pintar los articulos  en el html ***/
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
/*** pintar los articulos  en el html ***/

/*** numero de articulos agregados ***/
function agregarAlCarrito(i) {
let producto = BBDD[i];
  let existe = false;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].id === producto.id) {
      existe = true;
      carrito[i].cantidad++;
      contadorCarritoPagarTodo.innerHTML = carrito[i].cantidad;
    }
  }
  if (!existe) {
    producto.cantidad = 1;
    carrito.push(producto);
  }
  carritoAdicta.innerHTML = "";
  renderizarCarrito();
}
/*** numero de articulos agregados ***/

/*** pintar los articulos agregados en el html ***/
let carritoAdicta = document.getElementById(`carritoAdicta`);
carritoAdicta.addEventListener("click", renderizarCarrito);
function renderizarCarrito() {
  for (let i = 0; i < carrito.length; i++) {
    let { nombre, precio, cantidad, id } = carrito[i];
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
contadorCarrito.innerHTML = carrito.length;
}
}
/*** pintar los articulos agregados en el html ***/

/*** eliminar articulo agregado ***/
function eliminarDelCarrito(i) {
  carrito.splice(i, 1);
  carritoAdicta.innerHTML = "";
}
/*** eliminar articulo agregado ***/

/*** comprar ***/
function comprarCarrito(i) {
  let { cantidad, precio, } = carrito[i]; // destrructuracion
  var totalPrenda = cantidad * precio;
  total2 += totalPrenda;
  swal.fire("Gracias por comprar",`total a pagar: ${totalPrenda}$`, "success"); 
  carrito.splice(i, 1);
  carritoAdicta.innerHTML = "";
}
/*** comprar ***/

/*** ingreso de mercaderia ***/
let btnAgregarArticulo = document.getElementById("btnFormAgregar");
btnAgregarArticulo.addEventListener("click", agregar);
function agregar(nombre, precio, imagen, id, cantidad) {
   nombre.preventDefault();
  let imagenInput = document.getElementById("imagenFormAgregar").value;
    let inputAgregarArticulo = document.getElementById("nombreFormAgregar").value;
    let inputAgregarPrecio = document.getElementById("precioFormAgregar").value;
   imagen = imagenInput; 
   nombre=inputAgregarArticulo;
   precio=inputAgregarPrecio;
cantidad=0;
id=BBDD.length + 1;
    (nombre === "" || precio === "" || imagen === "") ? swal.fire("debe llenar todos los campos", "", "warning") : swal.fire("listo. su producto fue agregado.", "", "success"); // operador ternario
  let nuevoArticulo = new Basededatos(imagen, nombre, precio, id, cantidad);
  BBDD = [...BBDD, nuevoArticulo]; //spread operator
 tiendaAdicta.innerHTML = "";
 renderizarHtml();
 localStorage.setItem("BASEDEDATOS", JSON.stringify(BBDD)); 
}
/*** ingreso de mercaderia ***/

/*** datos de la compra ***/
let pagarTodo = document.getElementById("pagarTodo");
pagarTodo.addEventListener("click", pagarTodoCarrito);
let mostrarPago = document.getElementById("mostrarPago");
function pagarTodoCarrito() {
  const DateTime = luxon.DateTime;
  const date = DateTime.local();
  const hora = DateTime.local().hour;
  const minuto = DateTime.local().minute;
  const segundo = DateTime.local().second;

  swal.fire("Gracias por comprar",`total a pagar: ${total2}$`, "success");
  carrito.splice(0, carrito.length);
  mostrarPago.innerHTML = `
  <div class="container px-4 px-lg-5 mt-5">
  <div class="row gx-4 gx-lg-5 align-itemns-center justify-content-center">
  <div class="col-md-12">
  <div class="alert alert-dark" role="alert">
  <h4 class="alert-heading">Gracias por comprar</h4>
  <p>total a pagar: ${total2}$</p>
  <p>fecha: ${date.toFormat('dd/MM/yyyy')}</p>
  <p>hora: ${hora}:${minuto}:${segundo}</p>
  <div>
  <h5>articulos en el carrito:</h5>  
  </div>
  </div>
  </div>
  </div>

  `;
  carritoAdicta.innerHTML = "";
}
/*** datos de la compra ***/
let contadorCarrito = document.getElementById("contadorCarrito");
let contadorCarritoPagarTodo = document.getElementById("contadorCarritoPagarTodo");