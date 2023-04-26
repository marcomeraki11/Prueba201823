
// SEMANA 1

var index = 0;
var imagenes_semana_uno = document.querySelectorAll(".carrusel-imagen.semana_uno");

function cambiarImagen_semana_uno(direccion) {
  imagenes_semana_uno[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_uno.length) % imagenes_semana_uno.length;
  imagenes_semana_uno[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_uno(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_uno(1);
  }
});


// SEMANA 2

var index = 0;
var imagenes_semana_dos = document.querySelectorAll(".carrusel-imagen.semana_dos");

function cambiarImagen_semana_dos(direccion) {
  imagenes_semana_dos[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_dos.length) % imagenes_semana_dos.length;
  imagenes_semana_dos[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_dos(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_dos(1);
  }
});

// SEMANA 3

var index = 0;
var imagenes_semana_tres = document.querySelectorAll(".carrusel-imagen.semana_tres");

function cambiarImagen_semana_tres(direccion) {
  imagenes_semana_tres[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_tres.length) % imagenes_semana_tres.length;
  imagenes_semana_tres[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_tres(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_tres(1);
  }
});




// SEMANA 4

var index = 0;
var imagenes_semana_cuatro = document.querySelectorAll(".carrusel-imagen.semana_cuatro");

function cambiarImagen_semana_cuatro(direccion) {
  imagenes_semana_cuatro[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_cuatro.length) % imagenes_semana_cuatro.length;
  imagenes_semana_cuatro[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_cuatro(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_cuatro(1);
  }
});



// SEMANA 5

var index = 0;
var imagenes_semana_cinco = document.querySelectorAll(".carrusel-imagen.semana_cinco");

function cambiarImagen_semana_cinco(direccion) {
  imagenes_semana_cinco[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_cinco.length) % imagenes_semana_cinco.length;
  imagenes_semana_cinco[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_cinco(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_cinco(1);
  }
});



// SEMANA 5

var index = 0;
var imagenes_semana_dos = document.querySelectorAll(".carrusel-imagen.semana_dos");

function cambiarImagen_semana_dos(direccion) {
  imagenes_semana_dos[index].classList.remove("activo");
  index = (index + direccion + imagenes_semana_dos.length) % imagenes_semana_dos.length;
  imagenes_semana_dos[index].classList.add("activo");
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    cambiarImagen_semana_dos(-1);
  } else if (event.code === "ArrowRight") {
    cambiarImagen_semana_dos(1);
  }
});