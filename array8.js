//Realizar una funcion que te devuelva la suma del numero de caracteres de las palabras almacenadas en un array
function almarray(num) {
    var suma = 0;
    for (var i = 0; i < num.length; i++) {
        suma += num[i].length;
    }
    return suma;
}
console.log(almarray(["Luis", "Fernando", "Rodrigo"]));
