function nImp(x:number){
    var suma:number[] = [];
    for (let i=0; i<x; i++){
      if (i%2 == 1) {
        suma.push(i)
        
      }
    }
    return suma
  }
  
console.log(nImp(100));