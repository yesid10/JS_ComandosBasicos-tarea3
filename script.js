/*Hacer un algoritmo que calcule el sueldo de un empleado dados como datos de entrada: el nombre, 
horas trabajadas y el valor de la hora.*/

let nombre;
let horastrabajadas;
let valor_hora;

alert(`Calcular Sueldo 
Ingrese el nombre del trabajador, las horas que trabajo y el valor de la hora, respectivamente`);

nombre =prompt ("Nombre: ");
horastrabajadas = prompt("Horas que trabajo: ");
valor_hora = prompt ("Valor de la hora: ");
sueldo = horastrabajadas*valor_hora;

alert(`El trabajador es: ${nombre} 
Las horas de trabajo son: ${horastrabajadas} 
El valor de la hora es de: ${valor_hora}
El sueldo devengado por ${nombre} es de: ${sueldo}`);