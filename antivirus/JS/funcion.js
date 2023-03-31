function antivirus(m,l, l2){
    let letra = '';
    for(let i=0; i<m.length; i++){
        if(m[i]==l2 && m[i-1]==l && m[i+1]==l){

        }
        else{
            letra += m[i];
        }
    }
    return letra;
}