class Tarea {
    constructor (titulo, tar) {
        this.titulo = titulo
        this.tar = tar
    }
} 

const tareas = []

function mostrarTareas() {
    const mostrar = document.querySelector("div")
    mostrar.innerHTML = ""

    tareas.forEach( (tareaN)=> {
        const tareaM = `<div class="elemento">
        <input type="checkbox" for="lista">
        <label for="lista"><b>${tareaN.titulo}:</b> ${tareaN.tar}</label>
        </div>`
        
        mostrar.innerHTML += tareaM
    });
}

let btnBuscar = document.getElementById("buscar")
btnBuscar.addEventListener("click", () => {
    const buscar = prompt("Ingrese la palabra que desea buscar:")
    const resultado = tareas.find((Tarea) => Tarea.tar.includes(buscar))
    if (resultado !== undefined) {
        alert(resultado.tar)
    }
})

let btnNuevo = document.getElementById("nuevo")
btnNuevo.addEventListener("click", () => {
    let titulo = prompt("Ingrese el título para su tarea:")
    let tar = prompt("Ingrese una tarea:")
    
    if (titulo == "" || tar == "") {
        alert("Datos inválidos. Recarga y vuelve a intentar.")
    }

    let tareaN = new Tarea(titulo, tar)

    tareas.push(tareaN)

    mostrarTareas()
})

function terminada() {
    let tareaTerminada = document.querySelector(li)
    tareaTerminada.addEventListener("click", () => {
        li.class = "terminada"
})
}