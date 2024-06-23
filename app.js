
let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let intentoMaximo = 3;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Acertaste el número en ${intento} ${intento > 1 ? 'intentos' : 'intento'}`);
        activarBotonReiniciar();
    }else{
        //No acertó
        if(intento != 3){
            if(numeroUsuario > numeroSecreto){
                asignarTextoElemento('p', 'El número secreto es menor')
            }else{
                asignarTextoElemento('p', 'El número secreto es mayor')
            }
            intento++;
            limpiarCaja();
        }else{
            asignarTextoElemento('p', `Fallaste con ${intento} ${intento > 1 ? 'intentos' : 'intento'}`)
            listaNumerosSorteados.pop();
            activarBotonReiniciar();
        }
        
    }
    return;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    intento = 1;
    numeroSecreto = generarNumeroSecreto();
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){ 
    let numeroGenerado = parseInt(Math.random()*numeroMaximo) + 1;
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se han sorteado todos los números posibles');
        document.getElementById('reiniciar').removeAttribute('disabled');
        listaNumerosSorteados = [];
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function activarBotonReiniciar(){
    document.getElementById('reiniciar').removeAttribute('disabled');
}

condicionesIniciales();