// console.log('Ejemplo 2: Uso de .catch() y .finally()');

// fetch('https://jsonplaceholder.typicode.com/posts/1') 
//   .then(response => response.json())
//   .then(data => {
//     console.log('Datos recibidos:', data);
//   })
//   .catch(error => {
//     console.error('Error en la solicitud:', error);
//   })
//   .finally(() => {
//     console.log('La operación ha finalizado');
//   });




  console.log('Ejemplo 2: Uso de .catch() y .finally()');

  fetch('https://jsonplaceholder.typicode.com/posts/ABC') // URL mal formada para forzar error
    .then(response => response.json())
    .catch(error => {
      console.error('Error en la solicitud:', error);
    })
    .finally(() => {
      console.log('La operación ha finalizado');
    });
  

  //usar CTRL+K+U para descomentar el bloque de codigo