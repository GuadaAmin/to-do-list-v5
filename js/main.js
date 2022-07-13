  const tareas = [];

obtenerIdentificador()

let botonBuscar = document.querySelector("#botonBuscar");
botonBuscar.addEventListener("click", () => mostrarResultadoBuscar());

const botonAnadir = document.querySelector("#botonAnadir"); 
botonAnadir.addEventListener("click", () => {
  const titulo = document.querySelector("#inputTitulo").value;
  const tar = document.querySelector("#inputTar").value;

  let tareaN = new Tarea(titulo, tar); 
  if (titulo !== "" || tar !== "") {
    tareas.push(tareaN);
  } 
  guardarTareas();
  mostrarTareas();
});

recuperarTareas()

let check = document.querySelector(".checkbox")
check.addEventListener("onchange", () => {
  check.remove();
  guardarTareas();
})


