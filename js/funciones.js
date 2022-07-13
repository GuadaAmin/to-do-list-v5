const alertafire = () => {
  Swal.fire({
    icon: 'error',
    title: '¡Error!',
    text: 'Completa todo los datos',
  })
}

const catchfire = () => {
  Swal.fire({
    icon: 'error',
    title: '¡Error!',
    text: 'No se pudo reconocer tu identidad',
  })
}

const URL = "./usuarios.json";

const identificador = (info) => {
  const {nombre, apellido} = info
  const usuario = document.querySelector("#contenedorUsuario");
  const mostrarNombre = `<p>De ${nombre} ${apellido}</p>;`
  usuario.innerHTML += mostrarNombre;
}

const obtenerIdentificador = (URL)=> {
  fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    for (info of data) {
      identificador()
    }
  })
  .catch(() => {
    catchfire()
  })
}

const mostrar = document.querySelector("#contenedorTareas");

const mostrarTareas = () => {
  mostrar.innerHTML = "<h3>Tareas:</h3>";

  tareas.forEach((tareaN) => {
    const tituloNuevo = tareaN.titulo || alertafire()
    const tareaNueva = tareaN.tar || alertafire()
    if (tituloNuevo !== undefined && tareaNueva !== undefined) {
      const tareaM = 
      `<div class="elemento">
      <input type="checkbox" for="lista" class="checkbox">
      <label for="lista" class="animate__animated animate__fadeInUp"><b>${tituloNuevo}:</b> ${tareaNueva}</label>
      </div>` 

      mostrar.innerHTML += tareaM;
    }
    document.querySelector("#inputTitulo").value = "";
    document.querySelector("#inputTar").value = "";
  }); 
}

const mostrarResultadoBuscar = () => {
  const resultadoBuscarhtml = document.querySelector("#boxResultados");
  resultadoBuscarhtml.innerHTML = "";

  const inputBuscar = document.querySelector("#aBuscar").value;
  const resultadoBusquedaTar = tareas.find((Tarea) => Tarea.tar.includes(inputBuscar));
  const resultadoBusquedaTitulo = tareas.find((Tarea) => Tarea.titulo.includes(inputBuscar));

  if (tareas.find((Tarea) => Tarea.titulo.includes(inputBuscar))) {
    const resultadoBuscarTitulo = 
    `<ul class="animate__animated animate__fadeInUp">
    <li>${resultadoBusquedaTitulo.titulo}: ${resultadoBusquedaTitulo.tar}</li>
    </ul>`;
    resultadoBuscarhtml.innerHTML += resultadoBuscarTitulo;   
  } else if (tareas.find((Tarea) => Tarea.tar.includes(inputBuscar))) {
    const resultadoBuscarTar = 
    `<ul class="animate__animated animate__fadeInUp">
    <li>${resultadoBusquedaTar.titulo}: ${resultadoBusquedaTar.tar}</li>
    </ul>`;
    resultadoBuscarhtml.innerHTML += resultadoBuscarTar;
  } else {
    resultadoBuscarhtml.innerHTML = `<p class="animate__animated animate__fadeInUp">No hay coincidencias</p>`;
  }

  document.querySelector("#aBuscar").value = "";
}

const guardarTareas = () => {
  tareas.length > 0 && localStorage.setItem("tareas", JSON.stringify(tareas));
}

const recuperarTareas = () =>  {
  tareasR = JSON.parse(localStorage.getItem("tareas"));
  const recuperarTitulo = document.createElement("h3");
  recuperarTitulo.innerText = "Tareas:";
  mostrar.append(recuperarTitulo);
  mostrar.innerHTML = "<h3><b>Tareas:</b></h3>";

  tareasR.forEach(tarea => {
    const tareaRecuperadaDiv = document.createElement("div");
    tareaRecuperadaDiv.className = "elemento";
    const tareaRecuperadaCheckbox = document.createElement("input");
    tareaRecuperadaCheckbox.type = "checkbox";
    const tareaRecuperada = document.createElement("label");
    tareaRecuperada.className = "animate__animated animate__fadeInUp";
    tareaRecuperada.innerText = " " + tarea.titulo + ": " + tarea.tar;
    mostrar.append(tareaRecuperadaDiv);
    mostrar.appendChild(tareaRecuperadaCheckbox);
    mostrar.appendChild(tareaRecuperada);
  });
}

// const eliminarTarea = () => {
//   let aEliminar = document.querySelector("input[type:'checkbox']:checked"); 
//   aEliminar.remove();
//   item = tareas.indexOf(aEliminar.innerText);
//   if (item >= 0) {
//       tareas.splice(item, 1);
//       guardarTareas();
//   }
// }
