function parimpar(n) {
    var mensaje = "";
    for (var i = 1; i < n; i++) {
        if (i % 2 !== 0) {
            mensaje = "Es par";
        }
        else {
            mensaje = "NO ES PAR";
        }
    }
    return mensaje;
}
console.log(parimpar(9));
