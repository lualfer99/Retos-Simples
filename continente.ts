let latinoAmeria: string[] = ["Peru", "Chile", "Argentina", "Venezuela", "Brazil"];
let europa: string[] = ["España", "Belgica", "Alemania", "Italia", "Portugal"];
let asia: string[] = ["China", "India", "Iran", "Japon", "Singapur"];
let africa: string[] = ["Camerún", "Egipto", "Guinea", "Libia", "Nigeria"];
let oceania: string[] = ["Austria", "Nueva Zelanda", "Samoa", "Nueva Guinea", "Islas Salomón"];



function continent(country: string) {
    let continentes: string[][] = [latinoAmeria, europa, asia, africa, oceania];
    let matriz = new Array(continentes);
    for (let i = 0; i < continentes.length; i++) {
        let mensaje: string = "";
        if (latinoAmeria[i] == country) {
            mensaje = "Hola, tu continente es Latino America";
        } else if (europa[i] == country) {
            mensaje = "Hola, tu continente es  Europa"
        } else if (asia[i] == country) {
            mensaje = "Hola, tu continente es  Asia"
        } else if (africa[i] == country) {
            mensaje = "Hola, tu continente es  Africa"
        } else if (oceania[i] == country) {
            mensaje = "Hola, tu continente es  Oceania"
        } else {
            mensaje = "Tu pais no está en la lista de continentes"
        }

        return mensaje
    }

}


console.log(continent("Peru"));