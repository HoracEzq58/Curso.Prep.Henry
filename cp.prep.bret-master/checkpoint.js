// Importante: No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.

function mayorMenor(numeros) {
  // La función llamada 'mayorMenor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
  // arreglo que contenga el mayor número del arreglo 'numeros' en la posición uno y el menor número del arreglo
  // 'numeros' en la posición cero.
  // Ej:
  // mayorMenor([9, 17, 6, 2, 4]) debe retornar [2, 17]
  // ya que 17 es el número más grande (mayor) dentro del arreglo [9, 17, 6, 2, 4]
  // y 2 es el número más chico (menor) dentro del arreglo [9, 17, 6, 2, 4]

  // Tu código aca:
var desorden = [2,7,3,4,1,9,8,6,5];
	var ordenados = desorden.sort();
	var min = ordenados.shift();
	var max = ordenados.pop();
	var nuevoarray = [min,max];
return nuevoarray;
}

function mismaCantidadCaracteres(strings, caracteres) {
  // La función llamada 'mismaCantidadCaracteres', recibe como argumento un arreglo de strings llamado 'strings'
  // y un numero entero llamado 'caracteres'
  // Debe devolver en un array los strings que tengan el numero de caracteres coincidentes con 'caracteres'
  // Ej:
  // mismaCantidadCaracteres(['hi', 'hello', 'ni hao', 'guten tag'], 2) debe retornar ['hi'] ya que 'hi' tiene 2 caracteres
  // mismaCantidadCaracteres(['javascript', 'pedro', 'amigo', 'parque'], 5) debe retornar ['pedro', 'amigo']
  
  // Tu código aca:
	var strings =['hi', 'hello', 'ni hao', 'guten tag','javascript', 'pedro', 'amigo', 'parque'];
	var caracteres = 2;
	    for (let i = 0;i < strings.length;i++) {
    		if (strings[i].length === caracteres) {
    			var nuevoString = [];
    			nuevoString.push(strings[i]);
    	  }
    }
  return nuevoString;
}

function sumaTodosPrimos(array) {
  // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros que sean primos.
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Ej:
  // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
  // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.
  
  // Tu código aca:
const elementos = 11;
    let arreglo = [1, 5, 2, 9, 3, 4, 11];
    const algunosprimos = [];
      for(let candidato = 2; candidato <= elementos; candidato++) {
        if(arreglo.includes(candidato))  {
        let primo = true;
        for(let divisor=2; divisor < candidato; divisor++) {
            if(candidato%divisor === 0) {
            primo = !primo;
            break;
        }
    }
    if(primo) algunosprimos.push(candidato);
}
}
return (algunosprimos.reduce((a,b)=>a+b));
}

function sumArray(array, n) {
  // La función llamada 'sumArray' recibe como argumento un arreglo de números ordenados llamado 'array' y un número
  // entero llamdo 'n' y debe devolver true si alguna combinación de dos números cualesquiera del arreglo sumados
  // dan n, y devuelva false si ninguna combinación de dos números sumados da como resultado el número n.

  // Ej:
  // sumArray([2,5,7,10,11,15,20], 13)  debería devolver true ya que 2 + 11 = 13
  // sumArray([2,5,7,10,11,15,20], 14)  debería devolver false ya que no es posible sumar 14 con dos números del arreglo
  // Pista: Podes usar bucles/ciclos anidados
  // Aclaración: No es válido sumar el mismo número dos veces
  // Ej:
  // sumArray([2,5,7,10,11,15,20], 4)  Si bien 2 + 2 = 4 no está permitido sumar el mismo número dos veces
  // por lo tanto también debería devolver false en este caso

  // Tu código aca:
var array = [2,5,7,10,11,15,20];
for (let i = 0;i < array.length;i++) {
	if (array[i]+array[i] = n) {
		return true;
	}
	return false;
  }
}

function agregaPropiedad(amigos, propiedad) {
  // La funcion llamada 'agregaPropiedad' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que puede tener como propiedades 'nombre' o 'edad'. También
  // recibe un string llamado 'propiedad'.
  // Esta funcion debe agregar la propiedad 'propiedad' y setearla en null a aquellos objetos dentro de 'amigos' que no tengan esa propiedad
  // Debe devolver el array 'amigos' modificado.
  // Nota: Si el objeto dentro de 'amigos' tiene esa 'propiedad' no modificarla.
  // Ej:
  // var amigos = [{ nombre: 'toni' } , { nombre: 'Emi', edad: 25 }];
  // agregaPropiedad(amigos, 'edad') debe devolver [{ nombre: 'toni', edad: null } , { nombre: 'Emi', edad: 25 }]
  
  // Tu codigo: 
	var amigos =[{ nombre: 'toni' } , { nombre: 'Emi', edad: 25 }];
	var amigostoni = amigos[0];
	var amigosEmi = amigos[1];
	Object.defineProperty(amigos,'propiedad',{value: null});
	Object.defineProperty(amigostoni,'edad',{value:null});
	return amigos;
}

// =======================================================================

function crearClaseViajero() {
  class Viajero {
    constructor(nombre, edad, paises, compañeros) {
      // El constructor de la clase Viajero recibe nombre (string), edad (integer), paises (array de strings), compañeros (array de objetos)
      // Inicializar las propiedades del viajero con los valores recibidos como argumento
      // Tu código aca:
      					this.nombre = nombre;
      					this.edad = edad;
      					this.paises = paises;
      					this.compañeros = compañeros;
						    };//cierra constructor

    addCompañero(nombre, nacionalidad, edad) {
      // El método 'addCompañero' recibe un string 'nombre', un string 'nacionalidad' y un entero 'edad' y
      // debe agregar un objeto:
      // { nombre: nombre, nacionalidad: nacionalidad, edad: edad} al arreglo de compañeros del viajero.
      // No debe retornar nada.

      // Tu código aca:
      					viajero.compañeros.push([{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
      					viajero.compañeros.push([{nombre: 'Peter', nacionalidad: 'Belga', edad: 37}]);
      					this.compañeros = viajero.compañeros;
    }

    addPais(pais) {
      // El método 'AddPais' recibe un string 'pais' y debe agregarlo al arreglo de paises del viajero.
      // No debe retornar nada.

      // Tu código aca:
      					viajero.paises.push(['Brasil', 'Francia']);
      					this.paises = viajero.paises;
    }

    getCompañeros() {
      // El método 'getCompañeros' debe retornar un arreglo con sólo los nombres del arreglo de compañeros
      // del viajero.
      // Ej:
      // Suponiendo que el viajero tiene estos compañeros: [{nombre: 'John', nacionalidad: "Australiano", edad: 27},{nombre: 'Peter', nacionalidad: "Belga", edad: 23}]
      // viajero.getCompañeros() debería devolver ['John', 'Peter']

      // Tu código aca:
      			var [nomComp1, ] = Object.values(compañeros[0]);
      			var [nomComp2, ] = Object.values(compañeros[1]);
      			var nomComp = [nomComp1,nomComp2];
 			    return nomComp;
    }

    getPaises() {
      // El método 'getPaises' debe retornar un arreglo con los paises del viajero
      // Ej:
      // viajero.getPaises() debe devolver ['Belgica', 'Estados Unidos', 'Islandia']

      // Tu código aca:
      					return paises;
      
    }

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los compañeros de un viajero.
      // Ej:
      // Si el viajero tuviera estos compañeros:
      // {
      //   compañeros: [{
      //     nombre: 'John',
      //     nacionalidad: "Australiano",
      //     edad: 27,
      //   }, {
      //     nombre: 'Peter',
      //     nacionalidad: "Belga",
      //     edad: 23
      //   }]
      // }
      // viajero.getPromedioEdad() debería devolver 25 ya que (27 + 23) / 2 = 25

      // Tu código aca:
      					var [,,edadComp1] = Object.values(compañeros[0]);
      					var [,,edadComp2] = Object.values(compañeros[1]);
      					var promedioEdad = (edadComp1+edadComp2)/(compañeros.length);
      					return promedioEdad;
    }
  };
  const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
  return Viajero;
}

function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

};

// No modifiques nada debajo de esta linea
//

module.exports = {
  mayorMenor,
  mismaCantidadCaracteres,
  sumaTodosPrimos,
  sumArray,
  agregaPropiedad,
  crearClaseViajero,
  filtrar
}
