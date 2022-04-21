let formIniciarSesion = document.getElementById("formIniciarSesion");

formIniciarSesion.addEventListener("click", function(e) {
  e.preventDefault();
  let usuarioId = document.getElementById("usuarioId").value;
  let contrasenaId = document.getElementById("contrasenaId").value;


  sessionStorage.setItem("usuario", usuarioId);
  sessionStorage.setItem("contrasena", contrasenaId);
  let usuario = sessionStorage.getItem("usuario");
  let contrasena = sessionStorage.getItem("contrasena");
 
  if (usuario !== "" && contrasena !== "") {
    console.log("bienvenido");
    
    swal.fire("bienvenido", "", "success");
    
  } 
  else {
    console.log("error");
    swal.fire("Usuario o contraseña incorrectos", "", "error");
  }
});

/* function formIniciar(e) {   
  e.preventDefault();
  
  
}  */
