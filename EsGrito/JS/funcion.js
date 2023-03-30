function grito(m){
    let grito=0, letra=0;
    let msg="";
    for(let i=0; i<m.length; i++){
    	if(m[i] == '!'){
    		grito++;
    	}
    	if(isNaN(m[i]) && m[i] != '!'){
    		letra++;
    	}
    }
    if(grito>letra){
    	msg == "ESGRITO";
    }
    else{
    	msg == "escrito";
    }
    return msg;
}
