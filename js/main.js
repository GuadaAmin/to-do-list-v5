let botonBuscar = document.querySelector("#botonBuscar");
botonBuscar.addEventListener("click", () => mostrarResultadoBuscar());

const botonAnadir = document.querySelector("#botonAnadir"); 
botonAnadir.addEventListener("click", () => {
  const titulo = document.querySelector("#inputTitulo").value;
  const tar = document.querySelector("#inputTar").value;

  let tareaN = new Tarea(titulo, tar);  
  tareas.push(tareaN);
  guardarTareas()
  mostrarTareas();
});

recuperarTareas()

// const checked = document.querySelector(".checkbox").checked

// checkbox.addEventListener("click", () => {
//   if (checked) {
//     eliminarTarea()
//   }
// })
