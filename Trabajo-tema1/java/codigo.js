alert ("mensaje de prueba");
alert ("soy el primer script");
var mensaje = "gana la de afuera"

function muestraMensaje() {
    var mensaje = "gana la de adentro";
    alert(mensaje)
}

alert(mensaje);
muestraMensaje();
alert(mensaje);

function foo() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // 20
    }
    console.log(x); // 20
}