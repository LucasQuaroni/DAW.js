// 2. Strings
// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
// texto en mayúscula (utilizar toUpperCase).
// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los primeros 5 caracteres guardando el resultado en una nueva
// variable (utilizar substring).
// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los últimos 3 caracteres guardando el resultado en una nueva variable
// (utilizar substring).
// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con la primera letra en mayúscula y las demás en minúscula. Guardar el
// resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
// el operador +).
// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
// blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
// variable (utilizar indexOf).
// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
// algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
// generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
// toUpperCase, toLowerCase y el operador +).

//a.
var string5 = "hola mundo";
var mayusculas = string5.toUpperCase();
console.log(mayusculas);

//b.
var string6 = "hola mundo";
var primeros5 = string6.substring(0, 5);
console.log(primeros5);

//c.
var string7 = "hola mundo";
var ultimos3 = string7.substring(7, 10);
console.log(ultimos3);

//d.
var string8 = "hola mundo";
var mayuscula = string8.substring(0, 1).toUpperCase() + string8.substring(1, 10).toLowerCase();
console.log(mayuscula);

//e.
var string9 = "hola mundo";
var espacio = string9.indexOf(" ");
console.log(espacio);

//f.
var string10 = "utilizando javascript";
var primeraLetra1 = string10.substring(0, 1).toUpperCase();
var primeraLetra2 = string10.substring(11, 12).toUpperCase();
var resto1 = string10.substring(1, 10).toLowerCase();
var resto2 = string10.substring(12, 21).toLowerCase();
var resultado = primeraLetra1 + resto1 + " " + primeraLetra2 + resto2;
console.log(resultado);