''
let numeroSecreto = 0;
let intentos =0;
let numeroMaximo=10;
let listaDeNumerosSorteados = [];

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
  let numeroUsuario =parseInt(document.getElementById('valorUsuario').value);
  console.log(numeroSecreto);

if (numeroUsuario===numeroSecreto){
  asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos===1)? 'vez': 'veces'}`)
  document.getElementById('reiniciar').removeAttribute('disabled');
}else{
  if(numeroSecreto>numeroUsuario){
    asignarTextoElemento('p', 'numero secreto es mayor')
  }else{
    asignarTextoElemento('p', 'numero secreto es menor')
  }
intentos++;
limpiarCaja();
}


return;
}

function generarNumeroSecreto (){
  let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
  console.log(listaDeNumerosSorteados);
  if(listaDeNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','ya se sortearon todos los numeros posibles.');
  }else{

  if(listaDeNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();
  }else{
    listaDeNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }}
  
  }


function limpiarCaja(){
document.querySelector('#valorUsuario').value= '';
  }

function condicionesIniciales(){
 
  asignarTextoElemento('h1', 'juego del numero secreto!');
asignarTextoElemento('p', `elige un numero del 1 al ${numeroMaximo} `);
numeroSecreto= generarNumeroSecreto();
intentos =1;
}
  function reiniciarJuego (){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros 
    //generar el numero aleatorio
    //inicializar el numero de intentos 
    condicionesIniciales();
    //deshabilitar el boton de juego nuevo 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
  }
  condicionesIniciales();

  