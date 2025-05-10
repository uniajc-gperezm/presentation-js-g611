//Alcance y sus tipos
//GLOBAL
let mensaje = "Hola";

function mostrar() {
  console.log(mensaje); // Accede a la global
}
mostrar();

//FUNCIONAL
function saludar() {
    let saludo = "Holaaa";
    console.log(saludo); // Funciona
  }
  saludar();
  /*console.log(saludo); */
  
//BLOQUE
if (true) {
    let edad = 18;
  }
  //console.log(edad); // ErroR por que solo existe dentro del if
  