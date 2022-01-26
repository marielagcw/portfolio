/* -------------------------------------------------------------------------- */
/*                            Switch cambio de tema                           */
/* -------------------------------------------------------------------------- */
const boton = document.querySelector("button.theme");
const body = document.querySelectorAll("body");
const contenedorGeneral = document.querySelectorAll("div.contenedor-general");
const cambiarTemaSeccion = document.querySelectorAll("div.cambiarTema");
const tituloAcercaDe = document.querySelectorAll("h3.titulo");
const texto = document.querySelectorAll("p");
const contenedorTrabajos = document.querySelectorAll(
  ".contenedor.contenedor-trabajos"
);
const tituloTrabajos = document.querySelectorAll(".trabajos .titulo");
const nombreTrabajo = document.querySelectorAll("p.nombre");
const descripcionCategoria = document.querySelectorAll("p.categoria");
const tituloContacto = document.querySelectorAll("footer .contacto .titulo");
const bgRedesSociales = document.querySelectorAll("footer .redes-sociales a");
const arrayElementosHTML = [
  body,
  contenedorGeneral,
  cambiarTemaSeccion,
  tituloAcercaDe,
  texto,
  contenedorTrabajos,
  tituloTrabajos,
  nombreTrabajo,
  descripcionCategoria,
  tituloContacto,
  bgRedesSociales,
];

function cambiarTema(array) {
  array.forEach((element) => {
    element.forEach((e) => {
      if (!e.id) {
        e.setAttribute("id", "tema-oscuro");
      } else {
        e.removeAttribute("id");
      }
    });
  });
  const luna = document.querySelector("#luna");
  if (luna) {
    boton.removeChild(luna);
    boton.innerHTML = '<i id="sol" class="fas fa-sun"></i>';
  }
  else{
      const sol = document.querySelector("#sol");
    boton.removeChild(sol);
    boton.innerHTML = '<i id="luna" class="fas fa-moon"></i>';
  }
};
boton.addEventListener("click", (e) => {
  cambiarTema(arrayElementosHTML);
});
