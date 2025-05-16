//  console.log('Ejemplo 1: Manejo de errores con .then() y .catch()');

//  fetch('https://jsonplaceholder.typicode.com/posts/1')
//    .then(response => response.json())
//    .then(data => {
//      console.log('Datos recibidos:', data);
//    })
//    .catch(error => {
//      console.error('Ocurrió un error:', error);
//    });



// /*esta es una forma de forzar un error despues de la respuesta */

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    throw new Error('Error forzado de ejemplo después de la respuesta');
  })
  .then(data => {
    console.log('Datos recibidos:', data);
  })
  .catch(error => {
    console.error('Ocurrió un error:', error);
  });



//usar CTRL+K+U para descomentar el bloque de codigo