// Solicitar la edad al usuario
let edad = prompt("Por favor, ingresa tu edad:");

// Verificar si el valor es null o está vacío
if (edad === null || edad.trim() === "") {
    console.log("Por favor, ingresa un dato.");
} 
// Verificar si el valor ingresado no es un número
else if (isNaN(edad)) {
    console.log("Solo puedes colocar números.");
} 
// Verificar si la persona es mayor de edad (>= 18)
else if (Number(edad) >= 18) {
    console.log("Eres mayor de edad.");
} 
// Si la persona es menor de edad
else if (Number(edad) < 18) {
    console.log("Eres menor de edad.");
}
