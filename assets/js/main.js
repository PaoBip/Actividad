const boton = document.getElementById("btnMimitos");
const alerta = document.getElementById("alertaMimitos");

boton.addEventListener("click", function() {
  alerta.classList.remove("d-none");
  setTimeout(function() {
    alerta.classList.add("d-none");
  }, 3000);
});

const botonArriba = document.getElementById("btnArriba");

botonArriba.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});