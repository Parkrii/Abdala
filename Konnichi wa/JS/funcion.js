function Konnichhi(m){
    const no='aeiounAEIOUN'; copia='Konnichi wa, ';
    for(let i=0; i<m.length; i++){
        copia += m[i];
        if(!no.includes(m[i]) && !no.includes(m[i+1]) && m[i]!=' '){
            copia += 'u';
        }
    }
    copia += '-san';
    return copia;
}