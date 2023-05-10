// =============== LO SIGUIENTE VUELVE FUNCIONAL EL ICONO DE BORRAR TAREA =============================================
const iconoBorrarTarea = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", borrarTarea);
    return i;
}

const borrarTarea = (event) => {
    const quitarElementoPadre = event.target.parentElement;         // Se asigna a PARENT para que elimine el elemento pádre
    quitarElementoPadre.remove();
}

export default iconoBorrarTarea;