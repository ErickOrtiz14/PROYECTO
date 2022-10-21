document.getElementById("blat1").onclick = b1; /* LLAMAR LAS VARIABLES BOTON 1*/
document.getElementById("blat2").onclick = b2; /* LLAMAR LAS VARIABLES BOTON 2*/
document.getElementById("blat3").onclick = b3; /* LLAMAR LAS VARIABLES BOTON 3*/
document.getElementById("blat4").onclick = b4; /* LLAMAR LAS VARIABLES BOTON 4*/
var y = document.getElementById("p2");
 function b1() {   /* BOTON 1*/
    y.style.display = "none";
    document.getElementById("p3").style.display = "block";
    document.getElementById("blat1").disabled = true; /* FUNCION PARA LOS BOTONES*/
    document.getElementById("blat2").disabled = true; /* FUNCION PARA LOS BOTONES*/
    document.getElementById("blat3").disabled = true; /* FUNCION PARA LOS BOTONES*/
    document.getElementById("blat4").disabled = true; /* FUNCION PARA LOS BOTONES*/
}
 function b2() { /* BOTON 2*/
    y.style.display = "none";
    document.getElementById("p4").style.display = "block"; /* FUNCION PARA MOSTRAR LA CUARTA PANTALLA*/
    document.getElementById("blat1").disabled = true; /* FUNCION PARA LOS BOTONES*/
    document.getElementById("blat2").disabled = true; /* FUNCION PARA LOS BOTONES*/
    document.getElementById("blat3").disabled = true; /* FUNCION PARA LOS BOTONES*/
    document.getElementById("blat4").disabled = true; /* FUNCION PARA LOS BOTONES*/
 }

 function b3() { /* BOTON 3*/
    alert(pincambiar = prompt("Ingrese el nuevo numero de pin")); /* FUNCION INGRESAR EL NUEVO NUMERO DE PIN */
    if (pincambiar == null || pincambiar == "") {
        pincambiar = "2022";
    }
 }
 function b4() { /* BOTON 4*/
    y.style.display = "none"; 
    document.getElementById("blat1").disabled = true; /* BOTON 1 DESABILITADO*/
    document.getElementById("blat2").disabled = true; /* BOTON 2 DESABILITADO*/
    document.getElementById("blat3").disabled = true; /* BOTON 3 DESABILITADO*/
    document.getElementById("blat4").disabled = true; /* BOTON 4 DESABILITADO*/
    x.style.display = "block";
    
    
 }
document.getElementsByClassName("return").onclick = regresar; /* FUNCION DE BOTON DEL REGRESO */
function regresar() {
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "none";
    document.getElementById("p2").style.display = "block";  
    document.getElementById("blat1").disabled = false; /* BOTON 1 DESABILITADO*/
    document.getElementById("blat2").disabled = false; /* BOTON 2 DESABILITADO*/
    document.getElementById("blat3").disabled = false; /* BOTON 3 DESABILITADO*/
    document.getElementById("blat4").disabled = false; /* BOTON 4 DESABILITADO*/
}