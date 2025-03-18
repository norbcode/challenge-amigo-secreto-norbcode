// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const botonAgregar = document.querySelector(".button-add");
    if (input.value.trim() !== "") {
        amigos.push(input.value.trim());
        actualizarLista();
        input.value = "";
    }
    botonAgregar.disabled = true;
}