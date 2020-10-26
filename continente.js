function continent(country) {
    var paises = ["Peru", "Chile", "Argentina", "Venezuela", "Brazil"];
    var mensaje = "NO ESTAS EN NINGUN CONTINENTE";
    var continent = true;
    if (continent == true) {
        for (var i = 0; i < paises.length; i++) {
            if (country == paises[i]) {
                return "Estas en LatinoAmeria papi";
            }
        }
    }
    else {
        console.log(mensaje);
    }
}
console.log(continent("Siia"));
