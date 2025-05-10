//Const no se puede redeclarar, reasignar y si tiene alcance de bloque
//Se usa cuando se quiere que una variable no cambie su valor0

//Se les debe asignar un valor al declararlas
const PI = 3.1416;
console.log("pi: " , PI);

//incorrecto
/*const A;
A = 10;*/

//No se puede reasignar
//PI = 3.15; DARA UN ERROR
//PI = PI + 10; TAMBIEN DARA UN ERROR
//console.log("pi: " , PI);
//-------------------------------------------

//let
//No se puede acceder a la variable let fuera del bloque {} donde se declaro

let x = 2;
x = 20;
console.log("x: " , x);  
/*let x = 28;
console.log("x: " , x);*/  
//_____________________________________________


//Alcance global
//Con var se puede acceder a la variable fuera del bloque
{
    var y = 2;
}
// y se puede usar aqui
y=20;
console.log("y: " , y);
var y= 25; //Se puede reasignar