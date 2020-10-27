function arcoiris(x) {
    var colores = ["Rojo", "Amarillo", "Verde", "Azul", "Violeta"];
    var mensaje = "";
    for (var i = 0; i < colores.length; i++) {
        if (x[i].length == colores[i].length) {
            mensaje = "Todo ok";
        }
        else {
            mensaje = "El color no está dentro del arcoiris";
        }
    }
    return mensaje;
}
console.log(arcoiris(["Rojo", "Caca", "Verde", "Azul", "Violeta"]));
