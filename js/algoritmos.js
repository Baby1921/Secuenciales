function cabinaInternet(){

    let costoPorHora = 1200;
    let horasUtilizadas = prompt("Ingrese el número de horas consumidas:");
    let montoPagar = costoPorHora * horasUtilizadas;
    
    alert("El monto a pagar es de $" + montoPagar);

}

function flota(){

    let velocidadInicial = 45;
    let tiempoInicial = 2;

    let n = prompt("Ingrese el número de horas que desea viajar:");
    let velocidadFinal = velocidadInicial * tiempoInicial;
    let velocidad = velocidadFinal / n;

    alert("Para llegar en " + n + " horas, se debe viajar a una velocidad de " + velocidad + " km/h.");
}

function salario(){
    const salarioActual = parseInt(prompt('Ingrese el salario actual del trabajador'));
    const salarioConIncremento = salarioActual * 0.1;
    const salarioConDescuento = Math.round((salarioActual + salarioConIncremento) * 0.035);
    const nuevoSalario = (salarioActual + salarioConIncremento) - salarioConDescuento;
    alert(`El salario actual del trabajador es de ${salarioActual}, el incremento es de ${salarioConIncremento}, el valor total de descuentos es de ${salarioConDescuento}, el nuevo salario después de descuentos es de ${nuevoSalario}`)

}

function convertirMoneda(){

    const tasaDolar = 3450.00;
    const tasaEuro = 4080.00;

    let pesos = parseFloat(prompt("Ingrese la cantidad de pesos colombianos: "));

    let dolares = pesos / tasaDolar;
    let euros = pesos / tasaEuro;

    alert(pesos.toFixed(2) + " pesos colombianos son " + dolares.toFixed(2) + " dólares y " + euros.toFixed(2) + " euros");

}

function ganacias(){

    const tasaInteresMensual = 0.015;
    let ganancias = parseFloat(prompt("Ingrese sus ganancias: "));

    let interesesMes1 = ganancias * tasaInteresMensual;
    let capitalMes1 = ganancias + interesesMes1;

    let interesesMes2 = capitalMes1 * tasaInteresMensual;
    let capitalMes2 = capitalMes1 + interesesMes2;

    let interesesMes3 = capitalMes2 * tasaInteresMensual;
    let capitalMes3 = capitalMes2 + interesesMes3;

    let interesesMes4 = capitalMes3 * tasaInteresMensual;
    let capitalMes4 = capitalMes3 + interesesMes4;

    let interesesMes5 = capitalMes4 * tasaInteresMensual;
    let capitalMes5 = capitalMes4 + interesesMes5;

    let interesesMes6 = capitalMes5 * tasaInteresMensual;
    let capitalMes6 = capitalMes5 + interesesMes6;

    let interesesMes7 = capitalMes6 * tasaInteresMensual;
    let capitalMes7 = capitalMes6 + interesesMes7;

    let interesesMes8 = capitalMes7 * tasaInteresMensual;
    let capitalMes8 = capitalMes7 + interesesMes8;

    let interesesMes9 = capitalMes8 * tasaInteresMensual;
    let capitalMes9 = capitalMes8 + interesesMes9;

    let interesesMes10 = capitalMes9 * tasaInteresMensual;
    let capitalMes10 = capitalMes9 + interesesMes10;

    let interesesMes11 = capitalMes10 * tasaInteresMensual;
    let capitalMes11 = capitalMes10 + interesesMes11;

    let interesesMes12 = capitalMes11 * tasaInteresMensual;
    let capitalMes12 = capitalMes11 + interesesMes12;

    let gananciaTotal = capitalMes12 - ganancias;

    alert("Después de un año, sus ganancias serán de: $" + gananciaTotal.toFixed(2));

}

function calificacion(){

    const NUM_NOTAS = 4;
    let notas = [];

    for (let i = 0; i < NUM_NOTAS; i++) {
    notas[i] = prompt("Ingrese la nota " + (i+1) + ": ");
    }

    let sumaNotas = 0;
    for (let i = 0; i < NUM_NOTAS; i++) {
    sumaNotas += notas[i];
    }

    let promedioNotas = sumaNotas / NUM_NOTAS;
    let calificacionFinal = promedioNotas * 0.4 + 3.5 * 0.6;

    alert("Su calificación final en programación de software es: " + calificacionFinal.toFixed(1));

}

function operacion(){

    let numero = prompt("Ingrese un numero");
    let resultado = numero ** 3 / 2;

    alert(resultado);

}

function convertirDistancia(){

    let hm = 10;
    let km = hm * 10;
    let dm = hm * 100;

    alert(hm + " Hm son equivalentes a " + km + " Km y " + dm + " Dm.");

}

function nueve(){

    let metros = prompt("Ingrese su numero en metros");
    let pies = metros * 3.28084;
    let pulgadas = metros * 39.3701;

    alert(metros + " metros son equivalentes a " + pies + " pies y " + pulgadas + " pulgadas.");

}

function convertirPesos(){

    let kg = 25;
    let libras = kg * 2.20462;
    let arrobas = kg * 0.057;

    alert(kg + " Kg son equivalentes a " + libras + " libras y " + arrobas + " arrobas.");

}

function iva(){

    let valorArticulo = parseFloat(prompt("Ingrese el valor del artículo:"));
    let cantidadVenta = parseInt(prompt("Ingrese la cantidad de venta:"));
    let subtotal = valorArticulo * cantidadVenta;
    let iva = subtotal * 0.19;
    let total = subtotal + iva;

    alert("El total a cobrar es: $" + total.toFixed(2));

}

function convertirBytes(){

    let mb = 30;
    let tb = mb / 1000000;

    alert(mb + " Mb equivalen a " + tb.toFixed(6) + " Tb");

}

function convertirBytesDos(){

    let tb = 16000;
    let gb = tb * 1000;

    alert(tb + " Tb equivalen a " + gb + " Gb");

}

function areaCirculo(){

    let diametro = prompt("Ingrese el diámetro del círculo: ");
    let radio = diametro / 2;
    let area = Math.PI * Math.pow(radio, 2);

    alert("El área del círculo es: " + area.toFixed(2));

}