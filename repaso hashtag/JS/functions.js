function getHashTags(t){
    let palabra = '', sepa = [], final = [];

    for (let i = 0; i < t.length; i++) {
        if (t[i] != ' ' && t[i] != ' ') {
            palabra += t[i];
        }else if (t[i] == ' ') {
            sepa.push(palabra);
            palabra = '';
        }
        if (i == t.length - 1) {
            sepa.push(palabra);
            palabra = '';
        }
    }

    sepa.sort(function(a,b){
        return b.length - a.length;
    }
    );
    console.log(sepa);

    /*for(let i in sepa){
        for(let j in sepa){
            console.log(sepa[j])
                if (sepa[j].length < sepa[j+1].length) {
                palabra = sepa[j];
                sepa[j] = sepa[j+1];
                sepa[j+1] = palabra;                
            }
        }
    }
    */

    if (sepa.length <=3){
        for(let i in sepa){
            final += "#" + sepa[i];
        }
    } else {
        for(let i = 0; i < 3; i++){
            final += "#" + sepa[i];
        }
    }
    return final;
}