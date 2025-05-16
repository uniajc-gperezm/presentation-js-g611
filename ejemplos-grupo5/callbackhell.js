console.log("Iniciando proceso...");

// Simulación de operaciones asíncronas usando callbacks
setTimeout(() => {
    console.log("Paso 1: Conexión establecida.");

    setTimeout(() => {
        console.log("Paso 2: Datos enviados al servidor.");

        setTimeout(() => {
            console.log("Paso 3: Datos procesados por el servidor.");

            setTimeout(() => {
                console.log("Paso 4: Respuesta recibida y procesada.");
                console.log("Proceso completo.");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
