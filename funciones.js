//funcion q necesita un parámetro
function calcularPrecioTotal(precio){
    var impuesto = 1.16;
    var gastosEnvio = 10;
    var precioTotal = (precio * impuesto) + gastosEnvio;
    console.log (precioTotal);
}

calcularPrecioTotal(100);

const user0 = {
    nombre: "Marcelo",
    apellido: "Tinelli",
    edad: 50,
    nacionalidad: "Argentino",
    hijos: ["Juana", "Micaela", "Francisco", "Candelaria", "Lorenzo"],
    saludo: function saludar(){
        alert(`Hola!, soy ${this.nombre}`)
    }
}

///funcion constructora

function Usuarios(nom, ape, edad, nac, hijos){ //parametros
    this.nombre = nom;
    this.apellido = ape;
    this.edad = edad;
    this.nacionalidad = nac;
    this.hijos = hijos;
}

//utilizamos la funcion constructora para crear usuarios
let altauser1 = new Usuarios ("Maria", "Lopez", 30, "Argentina", [])
let altauser2 = new Usuarios ("Juan", "Mendez", 40, "Argentina", ['Pedro', 'Juana'])
let altauser3 = new Usuarios ("Luis", "Perez", 20, "Argentina", ['Lucas'])
let altauser4 = new Usuarios ("Alberto", "Llanez", 10, "Argentina", ['Martin', 'Julia'])
let altauser5 = new Usuarios ("Mariana", "Sonde", 60, "Argentina", [])

//creamos el array para guardar los datos de los usuarios
const personas = []; //le doy el valor array

//introducimos los datos dentro del array
personas.push(user0);
personas.push(altauser1);
personas.push(altauser2);
personas.push(altauser3);
personas.push(altauser4);
personas.push(altauser5);

//imprimir los datos de los usuarios por la pantalla

personas.forEach(element => {
    document.write(`Nombre: ${element.nombre},
     Apellido: ${element.apellido},
      Edad: ${element.edad},
      Nacionalidad: ${element.nacionalidad}, 
      Hijos: ${element.hijos}       
      <br> <hr>  `)
});

for (const iterator of personas) {
   document.write (`${iterator.nombre},
   ${iterator.apellido} `)}