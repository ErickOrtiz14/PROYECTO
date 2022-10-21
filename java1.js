/*ERICK ANDREY ORTIZ GUERRA 0909 22 17063 */
/*KENY STEVEN LOPEZ MORALES 0909 22 14396 */

var x = document.getElementById("p1"); /* LLAMAR LAS VARIABLES */
var y = document.getElementById("p2"); /* LLAMAR LAS VARIABLES */
const ntarjeta = "09092217063"; /* NUMERO DE TARJETA PARA INGRESAR*/
let pincambiar = "2022"; /* PIN DE LA TARJETA*/
document.getElementById("sumbit").onclick = loginone; 
function loginone() {
    usuario1 = document.getElementById("usuario").value;
    pin1 = document.getElementById("pin1").value;
    if (usuario1 != ntarjeta) {
        alert("Numero de tarjeta incorrecto."); /* MENSAJE EN PANTALLA */
    }
    else if (pin1 != pincambiar) {
        alert("Número de pin incorrecto."); /* MENSAJE EN PANTALLA */
        
    }
    else {
        x.style.display = "none";
        y.style.display = "block";
        document.getElementById("blat1").disabled = false; /* BOTONES LATERALES DEL CAJERO */
        document.getElementById("blat2").disabled = false; /* BOTONES LATERALES DEL CAJERO */
        document.getElementById("blat3").disabled = false; /* BOTONES LATERALES DEL CAJERO */
        document.getElementById("blat4").disabled = false; /* BOTONES LATERALES DEL CAJERO */
    }
}