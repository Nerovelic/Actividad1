// Creacion de una clase en Java con un metodo
// class persona{
//     constructor(nombre, apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }

//     quienSoy(){
//         console.log(`hola me llamo ${this.nombre} ${this.apellido}`);
//     }
// }
//     conts zack = new persona('zack','X');
//     zack.quienSoy();

// Creacion de un metodo que devuelve una variable en consola
// class Animal {
//     constructor(nombre){
//         this.velocidad = 0;
//         this.nombre = nombre;
//     }

//     empezoAmoverse(velocidad){
//         this.velocidad = velocidad;
//         return `${this.nombre} se mueve con una velocidad de ${this.velocidad} km/h.`
//     }

//     seDetuvo(){
//         this.velocidad = 0;
//         return `${this.nombre} se detuvo y ahora esta sentado mirando.`
//     }
// }

// let Animal = new animal('Animal');
// console.log(animal.empezoAmoverse(20));
// console.log(animal.seDetuvo());

// class Perro extends Animal{
//     ladrar(){
//         return `${this.nombre} esta ladrando`;
//     }
// }

// const chokys = new Perro('chokys');
// console.log(chokys.ladrar());
// console.log(chokys.empezoAmoverse(5));
// console.log(chokys.seDetuvo());

// Crreacion de Clase con get y set
// class Persona{
//     constructor(nombre,apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }
//     get nombreCompleto(){
//         return `${this.nombre} ${this.apellido}`
//     }

//     set nombreCompleto(nombre){
//         const partes = nombre.split(' ');
//         this.nombre = partes[0];
//         this.apellido = partes[1];
//     }
// }

// const zack = new Persona('Zack','X');
// const nombreActor = zack.nombreCompleto;
// console.log(`el nombre del actor es ${nombreActor}`);

// const goirno = new Persona();
// goirno.nombreCompleto = 'Giorno Govana';
// console.log(goirno);
// const estudainte = goirno.nombreCompleto;
// console.log(`el nombre es ${estudainte}`);

// const objetoDePrueba = {
//     nombre:'Zack',
//     get nombreDeUsuario(){
//         return this.nombre;
//     },
//     set nombreDeUsuario(nuevoNombre){
//         this.nombre = nuevoNombre;
//     }
// }

// console.log(objetoDePrueba.nombreDeUsuario);
// console.log(objetoDePrueba);
// objetoDePrueba.nombreDeUsuario = 'Giorno';
// console.log(objetoDePrueba.nombreDeUsuario);
// console.log(objetoDePrueba);

//Utilizacion de static en una clase
// class User{
//     constructor(name){
//         this.name = name;
//     }
//     static staticPropety = 'algo'
//     static staticMetodo(){
//         console.log(this.name);
//     }
// }

// const zack = new User('zack');
// const nombreDeUser = zack.name;
// console.log(nombreDeUser);

// const zack = new User('zack');
// User.staticMetodo();
// console.log(User.staticPropety);

// Union de metodos al llamar al padre mediante super
// class Animal {
//     constructor(nombre){
//         this.velocidad = 0;
//         this.nombre = nombre;
//     }

//     empezoAmoverse(velocidad){
//         this.velocidad = velocidad;
//         return `${this.nombre} se mueve con una velocidad de ${this.velocidad} km/h.`
//     }

//     seDetuvo(){
//         this.velocidad = 0;
//         console.log(`${this.nombre} se detuvo y ahora esta sentado mirándote`)
//     }
// }

// class Perro extends Animal{
//     ladrar(){
//         return `${this.nombre} esta ladrando.`
//     }
//     seDetuvo(){
//         super.seDetuvo();
//         console.log('y se está lamiendo...')
//     }
// }

// const perro = new Perro('chokys');
// perro.seDetuvo()

// Utilizacion de user strict en metodos
// 'use strict'
// mensaje = 'Hola este es una mensaje de prueba.';
// console.log(mensaje)

// a = 10;
// let addTwo = function () {
//   "use strict";
//   const b = 15;
//   return a + b;
// };

// let resultado = addTwo();
// console.log(resultado);

//Funciones
// "user strict";
// function nuevoMensaje1() {
//   console.log(this === undefined);
// }

// const nuevoMensaje2 = () => {
//   console.log(this === undefined);
// }

// function nuevoMensaje3(msg) {
//   return msg;
// }

// const nuevoMensaje4 = (msg) => msg;

// console.log(nuevoMensaje4);
