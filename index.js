const fs = require('fs').promises;
const path = require('path');

// Rutas
const archivoPath = path.join(__dirname, 'datos.json');
const logPath = path.join(__dirname, 'historial.txt');

// Datos iniciales
const datosEjemplo = {
  nombre: "Juan",
  edad: 28,
  correo: "juan@gmail.com",
  tecnologias: ["JavaScript", "Node.js", "MongoDB"]
};

// Función: crear archivo JSON si no existe
async function crearArchivoSiNoExiste() {
  try {
    await fs.access(archivoPath);
    console.log("📁 Archivo existente.");
  } catch {
    console.log("📁 Archivo no encontrado. Creando...");
    await fs.writeFile(archivoPath, JSON.stringify(datosEjemplo, null, 2), 'utf-8');
    await registrarLog("Archivo creado con datos iniciales.");
  }
}

// Función: registrar acciones en historial.txt
async function registrarLog(mensaje) {
  const fecha = new Date().toLocaleString();
  await fs.appendFile(logPath, `[${fecha}] ${mensaje}\n`);
}

// Función: leer contenido JSON
async function leerContenido() {
  const data = await fs.readFile(archivoPath, 'utf-8');
  return JSON.parse(data);
}

// Función: mostrar contenido en consola
function mostrarContenido(objeto) {
  console.log("📄 Contenido actual del archivo:");
  console.log(JSON.stringify(objeto, null, 2));
}

// Función: modificar valor existente
async function modificarCampo(clave, nuevoValor) {
  const data = await leerContenido();
  if (data.hasOwnProperty(clave)) {
    const anterior = data[clave];
    data[clave] = nuevoValor;
    await fs.writeFile(archivoPath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(` ${clave} modificado de '${anterior}' a '${nuevoValor}'.`);
    await registrarLog(`Modificado '${clave}' de '${anterior}' a '${nuevoValor}'.`);
  }
}

// Función: agregar campo si no existe
async function agregarCampo(clave, valor) {
  const data = await leerContenido();
  if (!data.hasOwnProperty(clave)) {
    data[clave] = valor;
    await fs.writeFile(archivoPath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(` Campo '${clave}' agregado.`);
    await registrarLog(`Agregado campo '${clave}'.`);
  }
}

// Función: eliminar campo si existe
async function eliminarCampo(clave) {
  const data = await leerContenido();
  if (data.hasOwnProperty(clave)) {
    delete data[clave];
    await fs.writeFile(archivoPath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(` Campo '${clave}' eliminado.`);
    await registrarLog(`Eliminado campo '${clave}'.`);
  }
}

// Función: simular operaciones automáticas para exposición
async function ejecutarSecuenciaOperaciones() {
  await modificarCampo("edad", 30);
  await agregarCampo("ciudad", "Bogotá");
  await modificarCampo("nombre", "Juan Pérez");
  await agregarCampo("activo", true);
  await eliminarCampo("correo");
  await agregarCampo("idiomas", ["español", "inglés"]);
  await modificarCampo("activo", false);
}

// Función: mostrar historial de operaciones
async function mostrarHistorial() {
  try {
    const log = await fs.readFile(logPath, 'utf-8');
    console.log("\n Historial de operaciones:");
    console.log(log);
  } catch {
    console.log("No hay historial registrado.");
  }
}

// Función principal
async function manejarArchivoJSON() {
  try {
    console.log("\n Iniciando gestión de archivo JSON...");
    await crearArchivoSiNoExiste();

    const contenidoInicial = await leerContenido();
    mostrarContenido(contenidoInicial);

    console.log("\n Ejecutando operaciones...");
    await ejecutarSecuenciaOperaciones();

    const contenidoFinal = await leerContenido();
    mostrarContenido(contenidoFinal);

    await mostrarHistorial();

  } catch (error) {
    console.error(" Error general:", error.message);
    await registrarLog(`Error: ${error.message}`);
  }
}

// Ejecutar
manejarArchivoJSON();
