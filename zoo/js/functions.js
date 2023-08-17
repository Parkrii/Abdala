
function main( ){
    let Jaula = [], animal=1;
    while(animal==1){
        Jaula.push( add( ) )
        animal = prompt( "ingrese 1 si quiere ingresar otro animal y 2 para salir" );
    }
    return mostrar( Jaula );
}

function add( ){
    let id, tipo, peso, nombre, numero;
    id = prompt("Ingrese id");
    tipo = prompt("Ingrese s si es felino y n si no");
    peso = prompt("Ingrese peso");
    nombre = prompt("Ingrese nombre");
    numero = prompt("Ingrese numero de jaula");
    let animal = new CZooAnimal(id, tipo, peso, nombre, numero);
    return animal;
}

function mostrar( Jaula ){
    let a5m3 = 0, fj2a5 = 0, a4m120 = "", msg = "";
    for(let i in Jaula){
        if( Jaula[i].mostrarJaula() == 5 && Jaula[i].mostrarPeso() < 3){
            a5m3 ++;
        }
        if( Jaula[i].mostrarJaula() >=2 && Jaula[i].mostrarJaula() <=5 && Jaula[i].mostrarTipo() == "s"){
            fj2a5 ++;
        }
        if( Jaula[i].mostrarJaula() == 4 && Jaula[i].mostrarPeso() < 120){
            a4m120 += Jaula[i].mostrarNombre();
        }
    }
    msg = "La cantidad de animales de la Jaula 5 cuyo peso sea menor a 3 kg es de "+a5m3+" La cantidad de animales de tipo felinos que estan entre las jaulas 2 a 5 es "+fj2a5+" Los nombres del los animales de la Jaula 4 cuyo peso sea menor a 120 son " + a4m120;
    return msg;
}

class CZooAnimal{
    constructor(IdAnimal, IdTypeAnimal, weight, name, cageNumber){
        this.IdAnimal = IdAnimal;
        this.IdTypeAnimal = IdTypeAnimal;
        this.weight = weight;
        this.name = name;
        this.cageNumber = cageNumber;
    }
    mostrarJaula(){
        return this.cageNumber;
    }
    mostrarPeso(){
        return this.weight;
    }
    mostrarTipo(){
        return this.IdTypeAnimal;
    }
    mostrarNombre(){
        return this.name;
    }

}

document.write(main());