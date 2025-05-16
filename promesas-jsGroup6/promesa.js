function promesaPersonalizada() {
    return new Promise((resolve, reject) => {
    const exito = false;
      // const exito = true;
      if (exito) {
        resolve('Todo salió bien');
      } else {
        reject('Ocurrió un error');
      }
    });
  }
  
  promesaPersonalizada()
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));
  

    //usar CTRL+K+U para descomentar el bloque de codigo