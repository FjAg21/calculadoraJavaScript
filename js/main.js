const d = document,/** --------------------------------- obtengo todos los elementos del HTML.*/
  displayCero = d.getElementById('displayCero'),
  display = d.getElementById('display'),
  botones = d.querySelectorAll('.button'),
  operadoradores = d.querySelectorAll('.operador'),

  trabajando = d.getElementById('trabajando'),
  cuartoMen = d.getElementById('cuartoMen'),
  madeInSpain = d.getElementById('madeInSpain');



/**----------------------------------------------------- variables para operar.*/

let $operadorPulsado = false,// si es false no imprime operadores.
  $valorNumero = "",//-------------almacena el valor del nº pulsado.
  primerNum,
  $ope;//---------------------almacena el valor del operador pulsado.


let aOperando, //------ almacena la primer cifra, antes de pulsar un operando.
  bOperando, //------ almacena la segunda cifra, después de pulsar un operando.
  operacion ="";//--- almacena el operandor de una operación matemática.





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



/**-------------------------------------------------------------------------evento a cada uno de los operadores.*/
operadoradores.forEach( operador => {

  operador.addEventListener( 'click', e => {

    $numPulsado = 0;
    $ope = operador.innerHTML;

    if ($operadorPulsado  === true){

      displayCero.innerHTML += $ope;/** muestra nº y operadores que el usuario va marcando en displayCero.*/
    }

    $operadorPulsado  = false;/** ---- para que no imprima operadores seguidos */


    switch ($ope){

      case '+':
        aOperando = display.innerHTML;
        operacion = "+";
        display.innerHTML = "";
        break;

      case '-':
        aOperando = display.innerHTML;
        operacion = "-";
        display.innerHTML = "";
        break;

      case '*':
        aOperando = display.innerHTML;
        operacion = "*";
        display.innerHTML = "";
        break;

      case '/':
        aOperando = display.innerHTML;
        operacion = "/";
        display.innerHTML = "";
        break;

      case '=':
        bOperando = display.innerHTML;
        resolver();
        break;

      case 'C':
        limpiar();
        $operadorPulsado  = true;
        break;

    }
  })

})



function limpiar (){

  display.innerHTML = "";
  displayCero.innerHTML = "";
}


function resetear(){

  display.innerHTML = "";
  aOperando = 0;
  bOperando = 0;
  operacion = 0;
}


/** Toma el tipo de operación, y dos cifras para hacer una operación.
 En um primer display muestra las operaciones que se van haciendo con su resustado.
 En un segundo display muestra el resultado final.
 */
function resolver(){

  let res = 0;
  switch (operacion){

    case '+':
      res = parseFloat(aOperando) + parseFloat(bOperando);
      break;
    case '-':
      res = parseFloat(aOperando) - parseFloat(bOperando);
      break;
    case '*':
      res = parseFloat(aOperando) * parseFloat(bOperando);
      break;
    case '/':
      res = ( parseFloat(aOperando) / parseFloat(bOperando) ).toFixed(3);
      break;

  }

  resetear();
  display.innerHTML = res;
  displayCero.innerHTML += res;
  $operadorPulsado  = true;
}



