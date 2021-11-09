const d = document,/** --------------------------------- obtengo todos los elementos del HTML.*/
  displayCero = d.getElementById('displayCero'),
  display = d.getElementById('display'),
  botones = d.querySelectorAll('.button'),
  operadoradores = d.querySelectorAll('.operador'),

  trabajando = d.getElementById('trabajando'),
  cuartoMen = d.getElementById('cuartoMen'),
  madeInSpain = d.getElementById('madeInSpain');



/**--------------------------------------------------------------------------evento a cada uno de los numeros.*/
botones.forEach( boton => {

  boton.addEventListener( 'click', (e) => {


    $operadorPulsado  = true;/** true permite imprimir operadores en displayCero.*/
    $valorNumero = boton.innerHTML;

    displayCero.innerHTML += $valorNumero;
    display.innerHTML += $valorNumero;// para---------------- pruebas

    primerNum = parseFloat(display.innerHTML);
  });

});



