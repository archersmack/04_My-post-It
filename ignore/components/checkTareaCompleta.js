
// ================= LO SIGUIENTE VUELVE FUNCIONAL EL ICONO DE TAREA COMPLETA/INCOMPLETA================================
const checkTareaCompleta = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", tareaCompletada);
    return i;
}

const tareaCompletada = (event) => {
    const element = event.target;         // Con TARGET capturo la accion o ubicacion del elemento para luego agregar o modificar
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

export default checkTareaCompleta;