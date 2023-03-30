function palindromo(m){
    let reves = '', msg = '', sin = '';
    for(let i=0; i<m.length; i++){
        if(m[i] != ' '){
            sin += m[i];
        }
    }
    for(let i=sin.length-1; i>=0; i--){
    	reves += sin[i];
    }
    if(sin == reves){
    	msg = "SI";
    }
    else{
    	msg = "NO";
    }
    return msg;
}