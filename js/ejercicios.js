
//Ejerc 1
// 1.    Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.
// let num1 = prompt("Digite numero 1: ");
// let num2 = prompt("Digite numero 2: ");
// let suma = 0;
// suma = +num1 + + num2;
// prompt("La suma es: ", suma);

// //Ejerc 2
// // 2.    Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.
// function suma(num1, num2,num3,num4){
//     //primero voy a convertilos en parametros
//     const Num1 = +num1;
//     const Num2 = +num2;
//     const Num3 = +num3;
//     const Num4 = +num4;
//     const promedio = (Num1 + Num2 + Num3 + Num4)/4;
//     console.log("El resultado es: ", promedio);
// }
// suma(20,20,10,5);

// //Ejerc 3
// // 3.    Calcular el área de un rectángulo
// const l = prompt("Digitar base: ");
// const an = prompt("Digitar altura: ");
// const area=(a,b)=>{
//     return (a * b);
// }
// prompt("Area: ", area(l, an));

// //Ejerc 4
// // 4. Calcular el área de un triángulo
// const b = prompt("Escribir base: ");
// const al = prompt("Escribir altura: ");

// const area=(a,b)=>{
//     return (a * b) / 2;
// }
// prompt("Area del triangulo: ", area(b, al));

// //Ejerc 5
// // 5.    Calcular el área de una circunferencia
// const radio = prompt("Escribir radio: ");
// const areaCircun=(a)=>{
//     return (Math.PI * (a * a));
// }
// prompt("El area de la circunferencia es: ", areaCircun(radio));

// //Ejerc 6
// // 6.    Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre.
// const salario = prompt("Ingresar salario: ");
// const horasT = prompt("Ingresar horas trabajadas: ");
// const diasT = prompt("Ingresar dias trabajados: ");

// const sueldoS=(a,b,c)=>{
//     return ((a * b) * c);
// }
// prompt("El sueldo semanal es: ", sueldoS(salario, horasT, diasT));

// //Ejerc7
// // 7.    Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas 
// // de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, 
// // determinando cuantas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m).

// const cantM = prompt("Escribir metros: ");
// const metroP = 39.3701;
// const calculoP = (cantM * metroP);
// prompt("Las pulgadas que necesita es: ", calculoP + " Pulgadas");

// // Ejerc8
// // 8.    Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano.

// // sol1
// const soles = prompt("Cantidad de soles a ingresar: ");

// const calD=(a)=>{
//     return (a * 0.2508);
// }
// prompt("Dolares: ", calD(soles));

// //sol2
// const soles = prompt("Cantidad de soles a ingresar: ");
// const dolar = prompt("Precio dolar: ");

// const calD=(a,b)=>{
//     return (a / b);
// }
// prompt("Dolares: ", calD(soles, dolar));

//ejer9
// Una empresa que contrada personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista solo se les pregunta en que a;o nacieron.

//ejer10
// Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad.

//ejer11
// Se les dara un bono por antiguedad a los empleados de una tienda. Si tienen un a;o se les dara un bono de $100. Si tienen 2 a;os $200, y asi sucesivamente hasta los 5 a;os. Para los que tengan mas de 5, el bono sera de $1000. Realice un algoritmo y representalo que permita determinar el bono que recibira un trabajador.

//ejer12
// Un profesor tiene un salario inicial de $1500 y recibe un incremento del 10% anual durante 6a;os. Cual es su salario al cabo de 6 a;os? Que salario ha recibido en cada a;o de los 6 a;os? Realice el algoritmo y represente la solucion, utilizando el ciclo apropiado.

//ejer13
// Realice un algoritmo para leer las calificaciones de N alumnos y determine el numero aprobados y desaprobados.

//ejer14
// Una compa;ia fabrica focos de colores (verdes, blancos y rojos). se desea contabilizar de un lote de N focos(matrices), el numero de focos de cada color que hay en existencia.

// //ejer15
// Realice un algoritmo para determinar una persona puede votar con base en su edad en las proximas elecciones.