const luis = {
  nombre: "luis",
  edad: 20,
  ingresos: [1100, 540, 310, 500],
};

const juan = {
  nombre: "juan",
  edad: 15,
  ingresos: [2000, 700, 2300, 300],
};

const carlos = {
  nombre: "carlos",
  edad: 17,
  ingresos: [200, 100, 300, 1200],
};

const lista = [luis, juan, carlos];

//forma para recorrer una lista y una clase

//Para recorrer una clase.//

// for (let i = 0; i < persona.ingresos.length; i++) {
//   console.log(persona.ingresos[i]);
// }

// for (let ingresos of persona.ingresos) {
//   console.log(ingresos);
// }

//Para recorrer una lista.//

// lista.forEach((x) => {
//   console.log(x.nombre);
// });

// lista.forEach((x) => {
//   console.log(x.edad);
// });

// lista.map((x) => {
//   console.log(x.edad);
// });

// let edades = lista.map((x) => {
//   return x.edad;
// });

// console.log(edades);
