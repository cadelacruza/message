const boton = document.getElementById("btn");
boton.addEventListener("click", message);

function message(e) {
  let mensaje = document.getElementById("mensaje").value;
  let output = document.getElementById("message");
  output.textContent = mensaje;
  e.preventDefault();
}
