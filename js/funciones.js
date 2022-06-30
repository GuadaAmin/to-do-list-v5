const mostrarTareas = () => {
    const mostrar = document.querySelector("#contenedorTareas");
    mostrar.innerHTML = "<h3><b>Tareas:</b></h3>";
  
    tareas.forEach((tareaN) => {
      const tareaM = 
          `<div class="elemento">
          <input type="checkbox" for="lista" class="checkbox">
          <label for="lista" class="animate__animated animate__fadeInUp""><b>${tareaN.titulo}:</b> ${tareaN.tar}</label>
          </div>`;
  
      mostrar.innerHTML += tareaM;
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

    if (tareas.find((Tarea) => Tarea.tar.includes(inputBuscar))) {
      const resultadoBuscarTar = 
      `<ul class="animate__animated animate__fadeInUp">
      <li>${resultadoBusquedaTar.titulo}: ${resultadoBusquedaTar.tar}</li>
      </ul>`;
      resultadoBuscarhtml.innerHTML += resultadoBuscarTar;
    } else if (tareas.find((Tarea) => Tarea.titulo.includes(inputBuscar))) {
      const resultadoBuscarTitulo = 
      `<ul class="animate__animated animate__fadeInUp">
      <li>${resultadoBusquedaTitulo.titulo}: ${resultadoBusquedaTitulo.tar}</li>
      </ul>`;
      resultadoBuscarhtml.innerHTML += resultadoBuscarTitulo;
    } else {
      resultadoBuscarhtml.innerHTML = `<p class="animate__animated animate__fadeInUp">No hay coincidencias</p>`;
    }
  
    document.querySelector("#aBuscar").value = "";
}


const eliminarTarea = () => {
  let aEliminar = document.querySelector("input[type:'checkbox']:checked")
  aEliminar.remove()
  item = tareas.indexOf(aEliminar.innerText)
  if (item >= 0) {
      tareas.splice(item, 1)
      guardarTareas()
  }
}

const guardarTareas = () => {
  if (tareas.length > 0) {
      localStorage.setItem("tareas", JSON.stringify(tareas))
  }
}


const recuperarTareas= () =>  {
  tareas = JSON.parse(localStorage.getItem("tareas"))
    tareas.forEach(Tarea => {
        // const tareaRecuperada = document.createElement("input")
        // tareaRecuperada.type = "checkbox"
        // tareaRecuperada.innerText = Tarea
        // tareas.push(Tarea)
        // mostrar.append(tareaRecuperada)
        // mostrarTareas()
        tareas.push(Tarea)
        const tareaRecuperada = document.createElement("input")
        tareaRecuperada.type = "checkbox"
        tareaRecuperada.innerText = Tarea
        mostrar.append(tareaRecuperada)
    });
}

