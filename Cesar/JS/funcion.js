function Cesar(m,n){
    let letra = '';
    for(let j=0; j<m.length; j++){
        let pos = m[j].charCodeAt();
        if(pos>=65 && pos<=90 || pos>=97 && pos<=122){
            if(n>0){
                for(let i=0; i<n; i++){
                    pos++;
                    if(pos==91 || pos==123){
                        pos -=26
                    }
                }
            }else{
                for(let i=0; i>n; i--){
                    pos--;
                    if(pos==64 || pos==96){
                        pos +=26
                    }
                }
            }
        letra += String.fromCharCode(pos);
        }
    }
    return letra;
}