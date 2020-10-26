function continent(country:string) {
    let paises = ["Peru", "Chile", "Argentina", "Venezuela", "Brazil"];
    let mensaje = "NO ESTAS EN NINGUN CONTINENTE";
    let continent = true
    
    if(continent == true){
    for(let i=0; i<paises.length;i++){
        if (country == paises[i]) {
             return `Estas en LatinoAmeria papi`;
        } 
    }  
    } else{
            
        

        }      
    }
    

console.log(continent("Siia"));