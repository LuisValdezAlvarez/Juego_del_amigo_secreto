// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [] ;
// Creamos la funcion para agregar lo nombre y validamos para que el campo no este vacio
function agregarAmigo(){
    let ingresaAmigo = document.getElementById("amigo").value.trim();

    if(ingresaAmigo === 0){
        alert("Debe ingresar un nombre");
        return;
    }else{
        amigos.push(ingresaAmigo);
        document.getElementById("amigo").value="";
        actualizarLista();
    }

}

//creamos la funcion para actulizar la lista cuando se agregen lo nombres
function actualizarLista(){

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(i=0 ; i<amigos.length;i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

//creamos la funcion para hacer el sorteo del nombre que saldra elegido
function sortearAmigo(){
    
    let amigoAleatorio = 0;

    if(amigos.length === 0){
        alert("La lista esta vacia , debe ingresar almenos un nombre :");
        return;
    }else{
        
        for(i=0 ;i<amigos.length;i++){
            amigoAleatorio = Math.floor(Math.random()* amigos.length)
        }
        let amigoSecreto = amigos[amigoAleatorio];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML =`<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`
        
    }

    
    
}


