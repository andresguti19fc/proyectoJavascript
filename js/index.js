/* articulos de la tienda */
class Articulo {
  constructor(imagen, prenda, precio, id, cantidad) {
    this.imagen = imagen;
    this.prenda = prenda;
    this.precio = parseInt(precio);
    this.id = id;
    this.cantidad = cantidad;
  }

  precioTotal() {
    return this.precio * 1.2;
  }
}
const prendaCamisa = new Articulo(1, "camisa", 10);
const prendaPantalon = new Articulo(2, "pantalon", 20);
const prendaZapatos = new Articulo(3, "zapatos", 30);
/*function listaArticulosAgregados() {
  for (let producto of nombresList) {
    let contenedor = document.createElement("ul");
    contenedor.innerHTML = `<li><h3>prenda: ${producto.prenda}</h3>
  <p>precio: ${producto.precio}</p></li>`;
    document.body.append(contenedor);
  }
}
 let listaArticulos = document.querySelector("#listaArticulos");
listaArticulos.addEventListener("click", listaArticulosAgregados);
console.log(listaArticulos);
let comprar = document.querySelector(".mensajeComprar");
let comprar2 = document.querySelector(".mensajeComprar2");
let comprar3 = document.querySelector(".mensajeComprar3");
const contadorCarrito = document.getElementById("contadorCarrito");
let contador = 0;

comprar.addEventListener("click", () => {
  swal.fire("listo", "se ha agregado al carrito", "success");
  contador++;
  contadorCarrito.textContent = contador;
});
comprar2.addEventListener("click", () => {
  swal.fire("listo", "se ha agregado al carrito", "success");
  contador++;
  contadorCarrito.textContent = contador;
});
comprar3.addEventListener("click", () => {
  swal.fire("listo", "se ha agregado al carrito", "success");
  contador++;
  contadorCarrito.textContent = contador;
});
 */