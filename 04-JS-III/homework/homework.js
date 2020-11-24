// No cambies los nombres de las funciones.

function devolverPrimerElemento ( array)  {
  // Devuelve el primer elemento de un array
  // Tu código:
return array[0]; }

function devolverUltimoElemento ( array )  {
  // Devuelve el último elemento de un array
  // Tu código:
return array[array.length - 1]; 
}

function obtenerLargoDelArray ( array )  {
  // Devuelve el largo de un array
  // Tu código:
return array.length;
}

function incrementarPorUno ( array )  {
  // "array" debe ser una matriz de enteros (int / integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
for( let i = 0; i < array.length; i++) { 
     array[i] = array[i] + 1 ;
   } 
  return array;
}

function agregarItemAlFinalDelArray ( array ,  elemento )  {
  // Agrega el "elemento" al final del array
  // y devuelve el array
  // Tu código:
array.push(elemento); 
return array; 
}

function agregarItemAlComienzoDelArray ( array ,  elemento )  {
  // Agrega el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
array.unshift(elemento); 
return array; 
}

let palabras = ["¡Hello','world!"];
function dePalabrasAFrase (palabras) {
  // "palabras" es un array de strings / cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['¡Hello', 'world!'] -> '¡Hello world!'
  // Tu código:
  return palabras.join(" ");
}

function arrayContiene (array , elemento)  {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for( let i = 0; i < array.length;i++) {
    if (array[i] === elemento) {
    return true;
   }
  }
return false;
}

function agregarNumeros (numeros) {
  // "array" debe ser una matriz de enteros (int / integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
    let suma = 0; 
    for ( let i = 0; i <numeros.length; i++ ) {
    suma = suma + numeros[i]; 
  }
  return suma;  
 }

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int / integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
    var contador = 0;
    for (let i = 0;i < resultadosTest.length;i++) {
      contador = contador + resultadosTest[i]
    }
    return contador/(resultadosTest.length);
}

function  numeroMasGrande ( numeros )  {
  // "numeros" debe ser una matriz de enteros (int / integers)
  // Devuelve el número más grande
  // Tu código:
    var maximo = numeros[0];
    for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) { maximo = numeros[i];
    }
   } 
  return maximo;
}

   //Usa la palabra clave `argumentos` para multiplicar todos los argumentos y devolver el producto
   //Si no se pasan argumentos devuelve 0
   //Si se pasa un argumento, simplemente devuélvelo
   //Tu código:

function multiplicarArgumentos (argumentos) { //abre funcion
  let numAMultip = Array.prototype.slice.call(arguments);// convierte en array los argumentos
  if (numAMultip.length === 0) {//abre if
  numAMultip.unshift(0);// q si no hay argumentos agrega un 0 para retornar en result 
              }//cierra if
  result = numAMultip.reduce((a,b)=>a*b) //multiplica todos los argumentos
  return result;
}//cierra funcion
multiplicarArgumentos(2,4,6);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento ,
  devolverUltimoElemento ,
  obtenerLargoDelArray ,
  incrementarPorUno ,
  agregarItemAlFinalDelArray ,
  agregarItemAlComienzoDelArray ,
  dePalabrasAFrase ,
  arrayContiene ,
  agregarNumeros ,
  promedioResultadosTest ,
  numeroMasGrande ,
  multiplicarArgumentos ,
} ;