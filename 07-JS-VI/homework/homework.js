// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
cb();
}


  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  
function sumarArray(numeros, cb) {
  array = arguments[0];
  var total = 0;
  for( let i = 0; i < array.length; i++ ) {
  total = total + numeros[i];
 }
 cb(total);
}



  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
function forEach(array, cb) {
for( let i = 0; i < array.length; i++ ) {
  cb(array[i]);
 }
}



  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
//var nuevoArray = array.map(function(elemento,indice) { return cb(elemento);});
//return nuevoArray;}

function map(array, cb) {
var nuevoArray = [];
 for( let i = 0; i < array.length; i++ ) {
   var resultado = cb(array[i]);
   nuevoArray.push(resultado);
  }
 return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
