// Obtener elementos
var modal = document.getElementById("miModal");
var btnAbrir = document.getElementById("abrirModal");
var btnCerrar = document.getElementById("cerrarModal");

// Abrir el modal
btnAbrir.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el modal al hacer clic en el botón de cerrar
btnCerrar.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal cuando se hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
