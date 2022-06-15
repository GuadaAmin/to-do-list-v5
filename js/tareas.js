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
        const tareaM = `<li id="probando"><b>${tareaN.titulo}:</b> ${tareaN.tar} </li>`
        
        mostrar.innerHTML += tareaM
    });
}

function buscarTareas() {
    const buscar = prompt("Ingrese la palabra que desea buscar:")
    const resultado = tareas.find((Tarea) => Tarea.tar.includes(buscar))
    if (resultado !== undefined) {
        alert(resultado)
    }
}

function nuevaTarea() {
    let titulo = prompt("Ingrese el título para su tarea:")
    let tar = prompt("Ingrese una tarea:")
    
    if (titulo == "" || tar == "") {
        alert("Datos inválidos. Recarga y vuelve a intentar.")
    }

    let tareaN = new Tarea(titulo, tar)

    tareas.push(tareaN)

    mostrarTareas()
}

