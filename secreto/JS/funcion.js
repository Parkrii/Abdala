function secreto(m){
    let frase = '', inicio = 0, fin = 0, comple = 1;
    for(let i=0; i<m.length; i++){
        if(m[i] == '('){
            comple = 0;
            inicio = i;
        } 
        if(comple == 1){
            frase += m[i];
        } 
        if(m[i] == ')'){
            comple = 1;
            fin = i;
            for(let j=fin-1; j>inicio; j--){
                frase += m[j];
            }
        }
       
    }
    return frase;
}