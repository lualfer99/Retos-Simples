var latinoAmeria = ["Peru", "Chile", "Argentina", "Venezuela", "Brazil"];
var europa = ["España", "Belgica", "Alemania", "Italia", "Portugal"];
var asia = ["China", "India", "Iran", "Japon", "Singapur"];
var africa = ["Camerún", "Egipto", "Guinea", "Libia", "Nigeria"];
var oceania = ["Austria", "Nueva Zelanda", "Samoa", "Nueva Guinea", "Islas Salomón"];
function continent(country) {
    var continentes = [latinoAmeria, europa, asia, africa, oceania];
    var matriz = new Array(continentes);
    for (var i = 0; i < continentes.length; i++) {
        var mensaje = "";
        if (latinoAmeria[i] == country) {
            mensaje = "Hola, tu continente es Latino America";
        }
        else if (europa[i] == country) {
            mensaje = "Hola, tu continente es  Europa";
        }
        else if (asia[i] == country) {
            mensaje = "Hola, tu continente es  Asia";
        }
        else if (africa[i] == country) {
            mensaje = "Hola, tu continente es  Africa";
        }
        else if (oceania[i] == country) {
            mensaje = "Hola, tu continente es  Oceania";
        }
        else {
            mensaje = "Tu pais no está en la lista de continentes";
        }
        return mensaje;
    }
}
console.log(continent("Peru"));
