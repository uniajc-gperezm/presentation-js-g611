//INMUTABLE
let texto = "Hola";
texto[0] = "X";
console.log(texto);

//MUTABLE
let persona = { nombre: "Carlos" };
let copia = persona;
console.log(copia); 

copia.nombre = "Pedro";

console.log(persona.nombre); 
console.log(copia);
