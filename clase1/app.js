let usuarios = [
  {
    "apodo": "Nepeta",
    "email": "nepetalover123@gmail.com",
    "mascotas": [
      { "nombre": "Luna", "edad": 3, "color": "blanco y negro" },
      { "nombre": "Simba", "edad": 1, "color": "naranja" },
      { "nombre": "Mia", "edad": 5, "color": "gris" }
    ]
  },
  {
    "apodo": "CatLady",
    "email": "catlady999@yahoo.com",
    "mascotas": [
      { "nombre": "Lucas", "edad": 4, "color": "negro" }
    ]
  },
  {
    "apodo": "GatitoFeliz",
    "email": "gatitofeliz22@hotmail.com",
    "mascotas": [
      { "nombre": "Cleo", "edad": 1, "color": "marrón" },
      { "nombre": "Toby", "edad": 6, "color": "blanco" },
      { "nombre": "Nina", "edad": 2, "color": "negro y blanco" }
    ]
  },
  {
    "apodo": "ElGatoNegro",
    "email": "elgatonegro@outlook.com",
    "mascotas": [
      { "nombre": "Oreo", "edad": 3, "color": "negro y blanco" },
      { "nombre": "Milo", "edad": 7, "color": "naranja" }
    ]
  },
  {
    "apodo": "GatitoTierno",
    "email": "gatitotierno5555@gmail.com",
    "mascotas": [
      { "nombre": "Pelusa", "edad": 2, "color": "gris" },
      { "nombre": "Kitty", "edad": 4, "color": "blanco y negro" },
      { "nombre": "Loki", "edad": 1, "color": "marrón y blanco" }
    ]
  },
  {
    "apodo": "CatQueen",
    "email": "catqueen8888@hotmail.com",
    "mascotas": [
      { "nombre": "Fluffy", "edad": 5, "color": "blanco y gris" },
      { "nombre": "Sasha", "edad": 2, "color": "marrón y blanco" }
    ]
  },
  {
    "apodo": "Nepeta",
    "email": "nepetaalegre7@yahoo.com",
    "mascotas": [
      { "nombre": "Punky", "edad": 3, "color": "naranja" },
      { "nombre": "Zoe", "edad": 1, "color": "blanco" },
      { "nombre": "Simón", "edad": 4, "color": "negro" }
    ]
  },
  {
    "apodo": "GatoMimoso",
    "email": "gatomimoso55@gmail.com",
    "mascotas": [
      { "nombre": "Leo", "edad": 2, "color": "blanco" },
      { "nombre": "Coco", "edad": 3, "color": "negro y blanco" }
    ]
  }
]

console.log( "/* ------------------------------- Ejercicio 1 ------------------------------ */");

let usuariosConID = usuarios.map((usuario, i) => {
    return {"id":i + 1, ...usuario};
})
console.log(usuariosConID);


console.log('El ID del primer usuario es: ' + usuariosConID[0].id);
console.log('El apodo del tercer usuario es: '+ usuariosConID[2].apodo);
console.log('El color de la 2da macota del 3er usuario es: ' + usuariosConID[2].mascotas[1].color);



console.log( "/* ------------------------------- Ejercicio 2 ------------------------------ */");

const [usuario1 , , , usuario4] = usuariosConID;
console.log(usuario1);
console.log(usuario4);


let {email: email, mascotas: mascotas} = usuario1;
console.log(email);
console.log(mascotas);


console.log( "/* ------------------------------- Ejercicio 3 ------------------------------ */");

/* ---------------------------- interpretacion 1 ---------------------------- */

// const arrayMascotas = usuariosConID.flatMap((usuario) =>{
//   return usuario.mascotas
// })
// console.log(arrayMascotas);

// const copiaArrayMascotas = [...arrayMascotas,{ "nombre": "Nami", "edad": 2, "color": "negro" } ];
// console.log(copiaArrayMascotas);

/* ---------------------------- interpretacion 2 ---------------------------- */

const mascotasNuevas = [...mascotas,{ "nombre": "Nami", "edad": 2, "color": "negro" }]
console.log(mascotas);
console.log(mascotasNuevas);



console.log( "/* ------------------------------- Ejercicio 4 ------------------------------ */");

function infoUsuario({apodo, mascotas}){
  if(mascotas.length > 1)
    return `El usuario ${apodo} tiene ${mascotas.length} mascotas"` 
  else 
    return `El usuario ${apodo} tiene ${mascotas.length} mascota"`
}
console.log(infoUsuario(usuariosConID[1]));



console.log("/* ------------------------------- Ejercicio 5 ------------------------------ */");

const usuariosConMascotas = usuariosConID.filter(usuario => usuario.mascotas.length > 1)
console.log(usuariosConMascotas);

const infoUsuariosCnMascota = usuariosConMascotas.map((usuario) => infoUsuario(usuario));
console.log(infoUsuariosCnMascota);

