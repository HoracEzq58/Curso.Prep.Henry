// No cambies los nombres de las funciones.

function crearUsuario() {//abre funcion
      class Usuario {//abre clase 
        constructor (usuario,nombre,mail,password) {//abre constructor
        this.usuario = 'jssamuel';
        this.nombre = 'Samuel';
        this.mail = 'samuel@email.com';
        this.password = 'LoveJS';
        Usuario.prototype.saludar = function() {//abre metodo
        return 'Hola mi nombre es '+ this.nombre;
      }//cierra constructor
     }//cierra clase
    }//cierra metodo
    //const user = new Usuario({usuario: 'jssamuel', nombre: 'Samuel', email: 'samuel@email.com', password: 'LoveJS' });
    return Usuario;
}//cierra funcion

  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

function agregarMetodoPrototype(Constructor) {
  Constructor.prototype.saludar = function() {
  return "Hello World!"; 
 }
}
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:

function agregarStringInvertida() {
  String.prototype.reverse = function() {
    var nuevostring = '';
    for (let i = 0; i < this.length; i++) {
    nuevostring = this[i] + nuevostring;
   } 
  return nuevostring;
 }
}

  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida
};
