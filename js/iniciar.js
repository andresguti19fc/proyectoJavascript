let formIniciarSesion = document.getElementById("formIniciarSesion");
formIniciarSesion.addEventListener("click", formIniciar);

function formIniciar() {
  let usuarioId = document.getElementById("usuarioId").value;
  let contrasenaId = document.getElementById("contrasenaId").value;
  sessionStorage.setItem("usuario", usuarioId);
  sessionStorage.setItem("contrasena", contrasenaId);
  if (usuarioId === "admin" && contrasenaId === "admin") {
    console.log("bienvenido");
    swal.fire("bienvenido", "", "success");
    window.location.href = "./index.html";
  } else {
    console.log("usuario o contraseña incorrectos");
    swal.fire("usuario o contraseña incorrectos", "", "warning");
  }
}
