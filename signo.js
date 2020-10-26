var Main = /** @class */ (function () {
    function Main(dia, mes) {
        this.dia = dia;
        this.mes = mes;
    }
    Main.prototype.getDia = function () {
        return this.dia;
    };
    Main.prototype.getMes = function () {
        return this.mes;
    };
    Main.prototype.setDia = function (dia) {
        this.dia = dia;
    };
    Main.prototype.setMes = function (mes) {
        this.mes = mes;
    }; 
    Main.prototype.calcularSigno = function (dia, mes) {
        if (mes == "Enero") {
            if (this.dia >= 21) {
                //acuario
                return "acuario";
            }
            else {
                //capricornio
                return "capricornio";
            }
        }
        if (this.mes == "Febrero") {
            if (dia >= 19) {
                return "piscis";
            }
            else {
                return "acuario";
            }
        }
        if (this.mes == "Marzo") {
            if (dia >= 20) {
                //acuario
                return "aries";
            }
            else {
                //capricornio
                return "piscis";
            }
        }
        if (this.mes == "Abril") {
            if (dia >= 20) {
                return "tauro";
            }
            else {
                return "Aries";
            }
        }
        if (this.mes == "Mayo") {
            if (dia >= 21) {
                //acuario
                return "geminis";
            }
            else {
                //capricornio
                return "tauro";
            }
        }
        if (this.mes == "Junio") {
            if (dia >= 20) {
                return "cancer";
            }
            else {
                return "geminis";
            }
        }
        if (this.mes == "Julio") {
            if (dia >= 22) {
                //acuario
                return "leo";
            }
            else {
                //capricornio
                return "cancer";
            }
        }
        if (this.mes == "Agosto") {
            if (dia >= 21) {
                return "virgo";
            }
            else {
                return "leo";
            }
        }
        if (this.mes == "Septiembre") {
            if (dia >= 22) {
                //acuario
                return "libra";
            }
            else {
                //capricornio
                return "virgo";
            }
        }
        if (this.mes == "Octubre") {
            if (dia >= 22) {
                return "escorpion";
            }
            else {
                return "libra";
            }
        }
        if (this.mes == "Noviembre") {
            if (dia >= 21) {
                //acuario
                return "sagitario";
            }
            else {
                //capricornio
                return "escorpion";
            }
        }
        if (this.mes == "Diciembre") {
            if (dia >= 21) {
                return "capricornio";
            }
            else {
                return "sagitario";
            }
        }
        return "fecha no valida papu :v";
    };
    return Main;
}());
var miSigno = new Main(22, "Octubre");
console.log(miSigno.calcularSigno(22, "Octubre"));
