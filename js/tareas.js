class Tareas {
    constructor (titulo, tarea) {
        this.titulo = titulo
        this.tarea = tarea
    }
} 

const arrayTareas = []

function mostrarTarea() {
    arrayTareas.forEach( (tareaN)=> {
        const tareaM = `<li id="probando">${tareaN}</li>`
        
        document.getElementById("lista").innerHTML += tareaM
    });
}

function nuevaTarea() {
    let titulo = prompt("Ingrese el título para su tarea:")
    let tarea = prompt("Ingrese una tarea:")
    
    if (titulo == "" || tarea == "") {
        alert("Datos inválidos. Recarga y vuelve a intentar.")
    }

    let tareaN = new Tareas(titulo, tarea)
    let obj = JSON.stringify(tareaN)

    arrayTareas.push(obj)

    mostrarTarea()
}

