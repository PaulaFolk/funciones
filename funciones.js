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

let altauser1 = new Usuarios ("Maria", "Lopez", 30, "Argentina", [])
let altauser2 = new Usuarios ("Juan", "Mendez", 40, "Argentina", ['Pedro', 'Juana'])
let altauser3 = new Usuarios ("Luis", "Perez", 20, "Argentina", ['Lucas'])
let altauser4 = new Usuarios ("Alberto", "Llanez", 10, "Argentina", ['Martin', 'Julia'])
let altauser5 = new Usuarios ("Mariana", "Sonde", 60, "Argentina", [])