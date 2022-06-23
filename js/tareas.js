class Tarea {
  constructor(titulo, tar) {
    this.titulo = titulo;
    this.tar = tar;
  }
}

const tareas = [];

function mostrarTareas() {
  const mostrar = document.querySelector("#contenedor");
  mostrar.innerHTML = "";

  tareas.forEach((tareaN) => {
    const tareaM = `<div class="elemento">
        <input type="checkbox" for="lista">
        <label for="lista"><b>${tareaN.titulo}:</b> ${tareaN.tar}</label>
        </div>`;

    mostrar.innerHTML += tareaM;
  });
}

function mostrarResultadoBuscar() {
    const resultadoBuscarhtml = document.querySelector("#boxResultados");

    const resultadoBuscar = `<ul><li> ${resultadoBusqueda.tar} </li></ul>`;
    resultadoBuscarhtml.innerHTML += resultadoBuscar;
}

let btnBuscar = document.getElementById("buscar");
btnBuscar.addEventListener("click", () => {
  const buscarhtml = document.querySelector("#textbuscar");

  const buscar =
    `<textarea id="aBuscar" placeholder="Buscar un elemento"></textarea>
    <button id="botonBuscar">Buscar</button>
    <div id="boxResultados"></div>`;
  buscarhtml.innerHTML += buscar;

  let botonBuscar = document.getElementById("botonBuscar");
  botonBuscar.addEventListener("click", () => {
    const inputBuscar = document.getElementById("aBuscar").value;
    const resultadoBusqueda = tareas.find((Tarea) =>
      Tarea.tar.includes(inputBuscar)
    );
    mostrarResultadoBuscar();
  });
});

let btnNuevo = document.getElementById("nuevo");
btnNuevo.addEventListener("click", () => {
  const nuevohtml = document.querySelector("#textnuevo");

  const nuevo =
    `<textarea id="inputTitulo" placeholder="Ingrese un título para su tarea"></textarea>
    <textarea id="inputTar" placeholder="Ingrese su nueva tarea"></textarea>
    <button id="botonAnadir">Añadir</button>`;
  nuevohtml.innerHTML += nuevo;

  let botonAnadir = document.getElementById("botonAnadir");
  botonAnadir.addEventListener("click", () => {
    const titulo = document.getElementById("inputTitulo").value;
    const tar = document.getElementById("inputTar").value;

    let tareaN = new Tarea(titulo, tar);
    tareas.push(tareaN);
    mostrarTareas();
  });
});