// ================= FUNCIONES ================================
const crearTarea = (evento) => {
    evento.preventDefault();
    const inputNuevasTareas = document.querySelector("[data-form-input]");
    const Tarea = inputNuevasTareas.value;
    const validar = inputNuevasTareas.validity.valid;
    const mensajeError = document.querySelector("[data-error]");

    if (validar){
        mensajeError.classList.add("mensajeError")
        mensajeError.classList.remove("mensajeError--validity")
        inputNuevasTareas.classList.remove("inputForm--invalid");
        const nuevaLista = document.querySelector("[data-lista]");
        const nuevaTarjeta = document.createElement("li");
        nuevaTarjeta.classList.add("card");
        inputNuevasTareas.value = "";
    
        const contenidoTarjeta = document.createElement("div");
        const tituloTarea = document.createElement("span");
        tituloTarea.classList.add("task");
        tituloTarea.innerText = Tarea;
        contenidoTarjeta.appendChild(checkTareaCompleta());
        contenidoTarjeta.appendChild(tituloTarea);
        
        nuevaTarjeta.appendChild(contenidoTarjeta);
        nuevaTarjeta.appendChild(iconoBorrarTarea());
        nuevaLista.appendChild(nuevaTarjeta);
        /*if (Tarea == ""){
            alert("Debe agregar una tarea.");
        }
        else{
            const nuevaLista = document.querySelector("[data-lista]");
            const nuevaTarjeta = document.createElement("li");
            nuevaTarjeta.classList.add("card");
            inputNuevasTareas.value = "";
        
            const contenidoTarjeta = document.createElement("div");
            const tituloTarea = document.createElement("span");
            tituloTarea.classList.add("task");
            tituloTarea.innerText = Tarea;
            contenidoTarjeta.appendChild(checkTareaCompleta());
            contenidoTarjeta.appendChild(tituloTarea);
            
            nuevaTarjeta.appendChild(contenidoTarjeta);
            nuevaTarjeta.appendChild(iconoBorrarTarea());
            nuevaLista.appendChild(nuevaTarjeta);
        }*/
    }else {        
        mensajeError.classList.remove("mensajeError");
        mensajeError.classList.add("mensajeError--validity");
        inputNuevasTareas.classList.add("inputForm--invalid");
        console.log(mensajeError);
        console.log("error");
    };


}

// ================= LO SIGUIENTE VUELVE FUNCIONAL EL ICONO DE TAREA COMPLETA/INCOMPLETA================================
const checkTareaCompleta = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", tareaCompletada);
    return i;
}

const tareaCompletada = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

// =============== LO SIGUIENTE VUELVE FUNCIONAL EL ICONO DE BORRAR TAREA =============================================
const iconoBorrarTarea = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", borrarTarea);
    return i;
}

const borrarTarea = (event) => {
    const quitarElementoPadre = event.target.parentElement;
    quitarElementoPadre.remove();
}


// =============== LO SIGUIENTE VUELVE FUNCIONAL EL ICONO DE BORRAR TAREA =============================================
const botonAgregarTarea = document.querySelector("[data-boton-agregarTarea]");
botonAgregarTarea.addEventListener("click", crearTarea);