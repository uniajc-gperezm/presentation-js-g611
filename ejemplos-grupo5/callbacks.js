// Ejemplo básico de una función con callback
function procesarEntradaUsuario(nombre, callback) {
    console.log(`Hola, ${nombre}. Bienvenido.`);
    
    // Llamamos a la función que nos pasen como callback
    callback(nombre);
}

// Una función que actuará como callback
function despedirUsuario(nombre) {
    console.log(`Adiós, ${nombre}. ¡Nos vemos pronto!`);
}

// Usamos la función principal con el callback
procesarEntradaUsuario("Esteban", despedirUsuario);
