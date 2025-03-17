// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Se crea la función que almacenará y mostrará los nombres en la consola.
function agregarAmigo() {
    let nombresRecibidos = document.getElementById('amigo').value;

    if (nombresRecibidos == "") {
        alert('Por favor, inserta un nombre');
        return;
    } else {
        amigos.push(nombresRecibidos);
        document.getElementById('amigo').value = "";
        amigo.focus();
        mostrarListaAmigos();
    }
}

//Función para mostrar la lista de nombres ingresados en el front
function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista

    for (let i = 0; i < amigos.length; i++){
        let objeto = document.createElement("li");
        objeto.textContent = amigos[i];
        listaAmigos.appendChild(objeto);
    }
}

//Función para ir realizar el sorteo y mostrar el nombre elegido en el "sortear nombre"
function sortearAmigo() {
    if(amigos.length === 0){
        alert('No hay amigos para sortear');
        return;
    } 
    //Se crea la variable para sortear la lista y se llama a Math.random para por el tamaño de la lista.    
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}