function arcoiris(x:string[]){
    let colores:string[] = ["Rojo", "Amarillo", "Verde", "Azul", "Violeta"];
    let mensaje = "";
    for(let i=0; i < colores.length; i++){
        if (x[i].length == colores[i].length) {
            mensaje = "Todo ok";
            
        } 
        else{
                mensaje = "El color no está dentro del arcoiris";
        }

        }
         
    }

       
    
console.log("JAJAJAJAJAJA");

console.log(arcoiris(["Rojo", "Caca", "Verde", "Azul", "Violeta"]))