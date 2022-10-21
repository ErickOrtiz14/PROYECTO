document.getElementById("retirarq").onclick = retirarq  /* BOTON DINERO EN QUETZALES*/
function retirarq() {
    alert(rquetzal = prompt("Ingrese la cantidad que desea retirar:")); /* ALERTA PARA INGRESAR LA CANTIDAD PARA RETIRAR*/
    dolares = document.getElementById("valordolar").value /*MONTO TOTAL EN DOLARES*/
    quetzales = document.getElementById("valorquetzal").value /* MONTO TOTAL EN QUETZALES*/
    if (quetzales-rquetzal == "0" ) {
        alert("Retiro exitoso. Retiraste todo el saldo disponible. No te queda saldo disponible."); /* ALERTA EN PANTALLA*/
        quetzales -= rquetzal;
        let conversionad = rquetzal*0.15; /* CONVERTIR A QUETZALES*/
        dolares -= conversionad; /* CONVERTIR A DOLARES*/
        document.getElementById("valordolar").value = dolares;
        document.getElementById("valorquetzal").value = quetzales;
    }
    else if (quetzales-rquetzal > "0") {
        alert("retiro exitoso.") /* ALERTA EN PANTALLA*/
        quetzales -= rquetzal;
        let conversionad = rquetzal*0.15; /* CONVERTIR A QUETZALES*/
        dolares -= conversionad;
        document.getElementById("valordolar").value = dolares; /* VALOR EN DOLARES*/
        document.getElementById("valorquetzal").value = quetzales; /*VALOR EN QUETZALES*/
    }
    else {
        alert("No tienes esa cantidad disponible para retirar, por favor ingresa una cantidad válida.")
    }
}
document.getElementById("retirard").onclick = retirard /* BOTON DINERO EN DOLARES*/
function retirard() {
    alert(rdolar = prompt("Ingrese la cantidad que desea retirar:")); /* ALERTA PARA INGRESAR LA CANTIDAD PARA RETIRAR*/
    dolares = document.getElementById("valordolar").value /* MONTO TOTAL EN DOLARES*/
    quetzales = document.getElementById("valorquetzal").value /* MONTO TOTAL EN QUETZALES*/
    if (dolares-rdolar == "0" ) {
        alert("Retiro exitoso. Retiraste todo el saldo disponible. No te queda saldo disponible.");
        dolares -= rdolar;
        quetzales = "0";
        document.getElementById("valordolar").value = dolares;
        document.getElementById("valorquetzal").value = quetzales;
    }
    else if (dolares-rdolar > "0") {
        alert("retiro exitoso.") /*ALERTA EN PANTALLA*/
        dolares -= rdolar;
        let conversionaq = rdolar*6.66666667; /* CONVERTIR A DOLARES*/
        quetzales -= conversionaq; /* CONVERTIR A QUETZALES*/
        document.getElementById("valordolar").value = dolares; /*VALOR EN DOLARES*/
        document.getElementById("valorquetzal").value = quetzales; /*VALOR EN QUETZALES*/
    }
    else {
        alert("No tienes esa cantidad disponible para retirar, por favor ingresa una cantidad válida.") /* ALERTA EN PANTALLA*/
    }
}