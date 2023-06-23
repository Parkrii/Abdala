function añoNuevo() {
    let hoy = new Date();
    let nuevo = new Date(2024, 1, 1);
    let mili = 1000 * 60 * 60 * 24;
    let falta = [];
    if (hoy.getMonth() == 1 && hoy.getDate() > 1) {
        nuevo.setFullYear(nuevo.getFullYear() + 1);
    }
    falta = parseInt((nuevo.getTime() - hoy.getTime()) / mili);
    return falta;
}

function campeones() {
    let hoy = new Date();
    let campeon = new Date(2022, 11, 18);
    let mili = 1000 * 60 * 60 * 24;
    let dias = parseInt((hoy.getTime() - campeon.getTime()) / mili);
    return dias;
}

function año(dia1, dia2) {
    let mili = 1000 * 60 * 60 * 24 * 365;
    let años = parseInt((dia2.getTime() - dia1.getTime()) / mili);
    return años;
} 

function laborable(dia1) {
    msg = "";
    if(dia1.getDay()==0 || dia1.getDay()==6){
        msg = "no laborable"
    }else{
        msg = "laborable";
    }
    return msg;
} 
