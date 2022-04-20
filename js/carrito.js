localStorage.setItem(
  "BASEDEDATOS",
  JSON.stringify([
    {
      imagen: "camisa.jpg",
      nombre: "camisa",
      precio: 100,
      id: 1,
      cantidad: 0
    },
    {
      imagen: "pantalon.png",
      nombre: "pantalon",
      precio: 200,
      id: 2,
      cantidad: 0
    },
    {
      imagen: "zapatos.jpg",
      nombre: "zapatos",
      precio: 300,
      id: 3,
      cantidad: 0
    },
    {
      imagen: "camisa.jpg",
      nombre: "camisa",
      precio: 100,
      id: 4,
      cantidad: 0
    },
    {
      imagen: "pantalon.png",
      nombre: "pantalon",
      precio: 200,
      id: 5,
      cantidad: 0
    },
    {
      imagen: "zapatos.jpg",
      nombre: "zapatos",
      precio: 300,
      id: 6,
      cantidad: 0
    },
    {
      imagen: "camisa.jpg",
      nombre: "camisa",
      precio: 100,
      id: 7,
      cantidad: 0
    },
    {
      imagen: "pantalon.png",
      nombre: "pantalon",
      precio: 200,
      id: 8,
      cantidad: 0
    },
    {
      imagen: "zapatos.jpg",
      nombre: "zapatos",
      precio: 300,
      id: 9,
      cantidad: 0
    },
    {
      imagen: "camisa.jpg",
      nombre: "camisa",
      precio: 100,
      id: 10,
      cantidad: 0
    },
    {
      imagen: "pantalon.png",
      nombre: "pantalon",
      precio: 200,
      id: 11,
      cantidad: 0
    },
    {
      imagen: "zapatos.jpg",
      nombre: "zapatos",
      precio: 300,
      id: 12,
      cantidad: 0
    },
  ])
);

let BASEDEDATOS = localStorage.getItem("BASEDEDATOS");

let carrito = [];
let total2 = 0;

function renderizarHtml() {
  let tiendaAdicta = document.getElementById("tiendaAdicta");

  for (let i = 0; i < JSON.parse(BASEDEDATOS).length; i++) {
    tiendaAdicta.innerHTML += `
          
          <div class="col-md-4 my-5">
              <div class="card h-100">
              <img class="card-img-top img-fluid" src="images/${
                JSON.parse(BASEDEDATOS)[i].imagen
              }" alt="..." />
                  <div class="card-body p-4">
                  <div class="text-center">
                      <h5 class="card-title">${
                        JSON.parse(BASEDEDATOS)[i].nombre
                      }</h5>
                      <p class="card-text">
                          <strong>precio:</strong> ${
                            JSON.parse(BASEDEDATOS)[i].precio
                          }
                      </p>
                      </div>
                      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent mt-5">
        <div class="text-center"><button class="btn btn-outline-dark mt-auto mensajeComprar" onclick="agregarAlCarrito(${i})" id="${
      JSON.parse(BASEDEDATOS)[i].id
    }" >Agregar al carrito</button></div>
  
                          </div>
                      
                  </div>
              </div>
          </div>
          
          `;
  }
}
renderizarHtml();
//agregar al carrito
function agregarAlCarrito(i) {
  let producto = JSON.parse(BASEDEDATOS)[i];
  let existe = false;
  for (let i = 0; i < carrito.length; i++) {
    
    if (carrito[i].id === producto.id) {
  existe = true;
  carrito[i].cantidad++;
  console.log(carrito);
    }
  }
  if (!existe) {
    producto.cantidad = 1;
    carrito.push(producto);
    
  }
  carritoAdicta.innerHTML = "";
  renderizarCarrito()

}
let carritoAdicta = document.getElementById(`carritoAdicta`);

carritoAdicta.addEventListener("click", renderizarCarrito);
function renderizarCarrito() {
  for (let i = 0; i < carrito.length; i++) {
    carritoAdicta.innerHTML += 
    `

    
    <tr>
    <td>${carrito[i].nombre}</td>
    <td>${carrito[i].cantidad}</td>
    <td>${carrito[i].precio}</td>
    <td>${carrito[i].cantidad * carrito[i].precio}</td>
    <td><button class="btn btn-outline-danger" onclick="eliminarDelCarrito(${i})" id="${carrito[i].id}">Eliminar</button></td>
    <td><button class="btn btn-outline-dark" onclick="comprarCarrito(${i})" id="${carrito[i].id}">Comprar</button></td>
    
    </tr>
    </tbody>
    
    `;
       
  }
}
console.log();
//necesito terminar de hacer el carrito de compras
function eliminarDelCarrito(i) {
  carrito.splice(i, 1);
  carritoAdicta.innerHTML = "";
}

function comprarCarrito(i) {
 swal.fire("Gracias por comprar", `total a pagar: ${carrito[i].cantidad * carrito[i].precio}$`, "success");
  carrito.splice(i, 1);
  carritoAdicta.innerHTML = "";
}



