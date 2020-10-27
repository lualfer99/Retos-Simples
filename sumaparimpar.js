//Realizar una funcion que te devuelva la suma del numero de caracteres de las palabras almacenadas en un array
function almarray(num) {
    var suma = 0;
    var mensaje = "";
    for (var i = 0; i < num.length; i++) {
        // console.log(suma + num[i].length)
        suma += num[i].length;
        if (suma % 2 == 0) {
            mensaje = "Es par";
        }
        else {
            mensaje = "No es par";
        }
    }
    return mensaje;
}
console.log(almarray(["Casa", "Coche", "Ciudad", "Cesta"]));
console.log(almarray(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]));
console.log(almarray(["Venezuela", "Veneno", "Voltaje"]));
