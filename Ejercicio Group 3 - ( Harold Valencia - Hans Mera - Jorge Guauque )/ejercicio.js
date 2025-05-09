// Paso 1: Crear el array inicial
let numeros = [5, 1, 3, 2, 4];
console.log("Array inicial:", [...numeros]);

// Paso 2: Usar sort() (mutable)
numeros.sort((a, b) => a - b); // Organizar de manera acendente
console.log("Después de sort():", numeros); 

// Paso 3: Usar slice(0, 2) (inmutable)
let subArray = numeros.slice(0, 2);
console.log("Slice(0, 2):", subArray); //crea una sub array par amostrar de  la array original donde muestra de la pociion 0 a la 2 sin incluir el termino en la pocicion 2 
console.log("Array original después de slice():", numeros); 

// Paso 4: Usar splice(1, 1) (mutable)
numeros.splice(1, 1);//modifica la array original borrando el termino que se encuentran desde la posicion 1 hasta la 1
console.log("Después de splice(1, 1):", numeros); 