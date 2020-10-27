
function arcoiris(x:string[]){
    let colores:string[] = ["Rojo", "Amarillo", "Verde", "Azul", "Violeta"];
    // let array2:string[] = ["Rojo", "Amarillo", "Verde", "Azul", "Violeta"]

    let mensaje:string[] = [];
    
    for (let i=0; i < colores.length ; i++) {
        if("Rojo" == x[i] || "Amarillo" == x[i] || "Verde" == x[i] || "Azul" == x[i] || "Violeta" == x[i]){
            mensaje.push( x[i] + " está en el arcoiris");

        }else if(x[i] != colores[i]){
            mensaje.push("El color " + x[i] + " no está en el arcoiris")


        }
    }
    return mensaje

    


}

       
    

console.log(arcoiris(["Rojo2", "Amarillo", "CACA", "Verde", "Azul"]))