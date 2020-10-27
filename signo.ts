function calcularSigno(dia:number, mes:string)
    {
        if (mes == "Enero") {
            if (dia >= 21) {
                //acuario
                return "acuario";
            } else {
                //capricornio
                return "capricornio";
            }
        }
        if (mes == "Febrero") {
            if (dia >= 19) {
                return "piscis";
            } else {
                return "acuario";
            }
        }
        if (mes == "Marzo") {
            if (dia >= 20) {
                //acuario
                return "aries";
            } else {
                //capricornio
                return "piscis";
            }
        }
        if (mes == "Abril") {
            if (dia >= 20) {
                return "tauro";
            } else {
                return "Aries";
            }
        }
        if (mes == "Mayo") {
            if (dia >= 21) {
                //acuario
                return "geminis";
            } else {
                //capricornio
                return "tauro";
            }
        }
        if (mes == "Junio") {
            if (dia >= 20) {
                return "cancer";
            } else {
                return "geminis";
            }
        }
        if (mes == "Julio") {
            if (dia >= 22) {
                //acuario
                return "leo";
            } else {
                //capricornio
                return "cancer";
            }
        }
        if (mes == "Agosto") {
            if (dia >= 21) {
                return "virgo";
            } else {
                return "leo";
            }
        }
        if (mes == "Septiembre") {
            if (dia >= 22) {
                //acuario
                return "libra";
            } else {
                //capricornio
                return "virgo";
            }
        }
        if (mes == "Octubre") {
            if (dia >= 22) {
                return "escorpion";
            } else {
                return "libra";
            }
        }
        if (mes == "Noviembre") {
            if (dia >= 21) {
                //acuario
                return "sagitario";
            } else {
                //capricornio
                return "escorpion";
            }
        }
        if (mes == "Diciembre") {
            if (dia >= 21) {
                return "capricornio";
            } else {
                return "sagitario";
            }
        } 
        return "fecha no valida ";
    }



console.log(calcularSigno(21,"Octubre"));



