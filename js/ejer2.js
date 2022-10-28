function callMenu(){
    let nro_ejercicio= parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de exmamenes \r\n 3.Calcular el area de un rectangulo \r\n 4.Calcular el area de un triangulo \r\n 5.Calcular el area de una circunferencia \r\n 6.Calcular el sueldo semanal de un trabajador. \r\n 7.Convertir metros a pulgadas \r\n 8.Convertir soles a dolares \r\n 9.Determinar edad de persona \r\n 10.Determinar persona de menor edad. \r\n 11.Determinar bono de trabajador. \r\n 12. Determinar Salaio de 6 años de un profesor. \r\n 13. Determinar aprobados y desaprobados. \r\n 15. Determinar edad para votar")
    );
    if(isNaN(nro_ejercicio)){
        alert ("hey!! por fvor ingresa valores ")
    }else{
        MenuEjercicios(nro_ejercicio)
    }
}
function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 = parseFloat(prompt("ingresa el valor 1 a sumar "));
            let valor2 = parseFloat(prompt("ingresa el valor 2 a sumar "));
            alert(ej1_sumarValores(valor1,valor2)) 
            break;
        case 2:
            let ex1 = parseFloat(prompt("ingresa nota 1")) ;   
            let ex2 = parseFloat(prompt("ingresa nota 2")) ; 
            let ex3 = parseFloat(prompt("ingresa nota 3")) ; 
            let ex4 = parseFloat(prompt("ingresa nota 4")) ;
            alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4))  
            break;  
        case 3:
            let base_rect = parseFloat(prompt("ingrese base"));
            let altura_rect = parseFloat(prompt("ingrese altura"));
            alert (ej3_calcularAreaRectangulo(base_rect,altura_rect));
            break;
        case 4:
            let base_tria = parseFloat(prompt("Ingrese base: "));
            let altura_tria = parseFloat(prompt("Ingrese altura: "));
            alert (ej4_calcularAreaTriangulo(base_tria,altura_tria));
            break;
        case 5:
            let radio = parseFloat(prompt("Ingresa el radio: "));
            alert(ej5_calcularAreaCircunferencia(radio));
            break;
        case 6:
            const salario = parseFloat(prompt("Ingrese salario: "));
            const horasT = parseFloat(prompt("Ingresar horas trabajadas: "));
            const diasT = parseFloat(prompt("Ingresar dias trabajados: "));
            alert (ej6_calcularSalario(salario, horasT, diasT));
            break;
        case 7:
            const cantM = parseFloat(prompt("Escribir metros: "));
            alert (ej7_ConvertirMetrosPulgadas(cantM));
            break;
        case 8:
            const soles = parseFloat(prompt("Cantidad de soles a ingresar: "));
            const dolar = parseFloat(prompt("Precio dolar: "));
            alert (ej8_ConvertirSolesDolar(soles, dolar));
            break;
        case 9:
            const añoP = parseFloat(prompt("Digite año en que nacieron: "))
            alert(ej9_CalcularEdad(añoP));
            break;
        case 10:
            const nom1 = prompt("Nombre persona 1: ");
            const edad1 = parseInt(prompt("Edad persona 1:"));

            const nom2 = prompt("Nombre persona 2: ");
            const edad2= parseInt(prompt("Edad persona 2:"));

            const nom3 = prompt("Nombre persona 3: ");
            const edad3 = parseInt(prompt("Edad persona 3:"));
            alert(ej10_EdadMenor(nom1, edad1, nom2, edad2, nom3, edad3));
            break;
        case 11:
            const añoT = parseInt(prompt("Ingresar cuantos años tiene en la empresa: "));
            alert(ej11_bonoTrabajo(añoT));
            break;
        case 12:
            const pSalario = parseInt(prompt("Ingrese salario"));
            alert(ej12_salarioProfesor(pSalario));
            break;
        case 13:
            const cantN = parseInt(prompt("Ingrese cantidad de notas: "));
            alert(ej13_aprobadosDesaprobados(cantN));
            break;
        case 15:
            const edadV = parseInt(prompt("Ingresar edad: "));
            alert(ej15_edadVotar(edadV));
            break;
    }
}

// funciones por ejercicios 
function ej1_sumarValores(a,b){
    if(isNaN(a) || isNaN(b)){
        return"porfavor ingresa datos ";
    } else {
        return a + b
    }
}
function ej2_calcularPromedio(ex1,ex2,ex3,ex4){
    if(isNaN(ex1)|| isNaN(ex2)|| isNaN(ex3)|| isNaN(ex4)){
        return "porfavor ingresa las notas";
    } else {
        return(ex1 + ex2 + ex3 + ex4)/4;
    }

}
function ej3_calcularAreaRectangulo(base_rect,altura_rect){
    if(isNaN(base_rect) || isNaN(altura_rect)){
        return "porfavor ingresa datos";
    } else {
        return "el area del rectangulo es :"+base_rect * +altura_rect
    }
}
function ej4_calcularAreaTriangulo(base_tria, altura_tria){
    if(isNaN(base_tria) || isNaN(altura_tria)){
        return "Porfavor ingresar datos";
    } else {
        return "El area del triangulo es: "+(base_tria * altura_tria)/2;
    }
}
function ej5_calcularAreaCircunferencia(radio){
    if(isNaN(radio)){
        return "Porfavor ingresar el dato";
    } else {
        return "El area de la circunferencia es: " + (Math.PI * (radio * radio));
    }
}
function ej6_calcularSalario(salario, horasT, diasT){
    if(isNaN(salario) || isNaN(horasT) || isNaN(diasT)){
        return "Porfavor completar datos!!"
    } else {
        return "El salario semanal es: " + ((salario * horasT) * diasT);
    }
}
function ej7_ConvertirMetrosPulgadas(cantM){
    if(isNaN(cantM)){
        return "Porfavor ingresar el dato";
    } else {
        const metroP = 39.3701;
        return "Las pulgadas que necesita es: " + (cantM * metroP);
    }
}
function ej8_ConvertirSolesDolar(soles, dolar){
    if(isNaN(soles) || isNaN(dolar)){
        return "Porfavor completar los datos"
    } else {
        return "La cantidad de soles a dolares es: " + (soles / dolar);
    }
}
function ej9_CalcularEdad(añoP){
    if(isNaN(añoP)){
        return "Porfavor ingresar el dato";
    } else {
        const añoActual = 2022;
        return "La edad es: " + (añoActual - añoP) + " años"
    }
}
function ej10_EdadMenor(nom1, edad1, nom2, edad2, nom3, edad3){
    if(isNaN(nom1) && isNaN(edad1) || isNaN(nom2) && isNaN(edad2) || isNaN(nom3) && isNaN(edad3)){
        return "Porfavor ingresar los datos";
    } else {
        if(edad1 < edad2 && edad1 < edad3){
            return "Nombre: " + nom1 + " edad: " + edad1;
        } else {
            if (edad2 < edad3){
                return "Nombre: " + nom2 + " edad: " + edad2;
            } else {
                return "Nombre: " + nom3 + " edad: " + edad3;
            }
        }
    }
}
function ej11_bonoTrabajo(añoT){
    if(isNaN(añoT)){
        return "Debe ingresar dato"
    } else {
        if(añoT == 1){
            return "Se le dara un bono de $100";
        } else if (añoT == 2){
            return "Se le dara un bono de $200";
        } else if (añoT == 3){
            return "Se le dara un bono de $300";
        } else if (añoT == 4){
            return "Se le dara un bono de $400";
        } else if (añoT == 5){
            return "Se le dara un bono de $500";
        } else if (añoT > 5){
            return "Se le dara un bono de $1000";
        }
    }
}
function ej12_salarioProfesor (pSalario){
    let sal =0;
    let cantA;

    if (isNaN(pSalario)){
        return "Debe ingresar el salario"
    }else{
        for (p = 1; p <= 6; p ++){
            sal = pSalario * 0.10;
            pSalario=pSalario+sal;
            cantA=("El salario en el año "+p+" es: $"+pSalario);

            // Resulto con el prompt no con el return
            prompt(cantA);
        }
        return "el salrio en los 6 años es:$"+pSalario;
    }
}
function ej13_aprobadosDesaprobados(cantN){
    if(isNaN(cantN)){
        return "Ingresar valores";
    } else {
        let contA = 0;
        let contD = 0;
        for(let i = 0; i < cantN; i++){
            let nota = +(prompt("Ingrese nota " + (i + 1) + ": "));
            if(nota >= 0 && nota <11){
                contD++;
            } else if(nota >= 11 && nota <= 20){
                contA++;
            }
            // let resul = "Aprobados: " + contA + "\nDesaprobados: " + contD;
        }
        return "Aprobados: " + contA + "\nDesaprobados: " + contD;
    }
}
function ej15_edadVotar(edadV){
    if(isNaN(edadV)){
        return "Porfavor poner valores";
    } else {
        if(edadV >= 0 && edadV < 18){
            return "Es menor de edad, No puede votar"
        } else if(edadV >= 18 && edadV < 65){
            return "Es mayor de edad, si puede votar"
        } else if(edadV > 65){
            return "Es mayor pero es opcional votar"
        }
    }
}
