//Realiza una funcion que te devuelva si existe un numero par en el
//array de numeros que introduces como parámetro
function findpar(x:number[]){
    let pares = [];
    
    for(let i= 1;i<=x.length;i++){        
        if(x[i] % 2 == 0){
            pares.push(x[i])
        }
    }
    return "Los numeros pares son " + pares;
}

console.log(findpar([1, 2, 3, 4, 5, 6, 7]));
