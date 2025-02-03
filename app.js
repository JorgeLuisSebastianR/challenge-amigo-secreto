// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos= [];
let usuariosecreto;

function mostrarListaAmigos(elemento) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = '';
    listaDeAmigos.forEach(
        function(amigo) {
        let li = document.createElement('li'); 
        li.textContent = amigo; 
        elementoHTML.appendChild(li);
        }
    );
}


function agregarAmigo(){
    let numeroDeUsuario = document.getElementById('amigo').value;

    if(numeroDeUsuario === ""){
        alert("Por favor ingrese un nombre válido.");
    } else {
        listaDeAmigos.push(numeroDeUsuario);
        mostrarListaAmigos("ul");
        limpiarInputAmigo(numeroDeUsuario);
    }
    if(usuariosecreto != null){
        document.getElementById('resultado').textContent = '';
    }
    
}



function sortearAmigo() {
    if (listaDeAmigos.length <= 1) {
        alert("Debe haber más de 1 amigo en la lista para sortear.");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);        
        usuariosecreto = listaDeAmigos[indiceAleatorio];
        document.getElementById('resultado').textContent = usuariosecreto;
        limpiarListaAmigos("ul");
        }
}

function limpiarInputAmigo(numeroDeUsuario){
    document.querySelector('#amigo').value = '';
}

function limpiarListaAmigos(elemento){
    listaDeAmigos= [];
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = '';
}