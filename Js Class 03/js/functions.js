class CPersona {
  constructor(nombre, fecha_nacimiento, dni, genero, peso, altura) {
    this.nombre = nombre;
    this.fecha_nacimiento = fecha_nacimiento;
    this.dni = dni;
    this.genero = genero;
    this.peso = peso;
    this.altura = altura/100;
  }

  calcularIMC() {
    let imc = (this.peso/(this.altura **2));


    if (imc < 20) {
      imc = -1;
    } else if (imc >= 20 && imc <= 25) {
      imc = 0;
    }else if (imc > 25){
      imc = 1;
    }

    return imc;
  }
  
  esMayorDeEdad(){
    let fecha = new Date();
    fecha.setFullYear(fecha.getFullYear()-18);
    let fechaNaci = new Date(this.fecha_nacimiento);
    return fechaNaci.getTime() <= fecha.getTime();
  }

  comprobarGenero(){
    return this.genero;
  }
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event)

 {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
  const dni = document.getElementById('dni').value;
  const genero = document.getElementById('genero').value;
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;

  const persona = new CPersona(nombre, fecha_nacimiento, dni, genero, peso, altura);

  const mostrar = document.getElementById('mostrar');
  mostrar.innerHTML = "Su IMC es: " + persona.calcularIMC() + "<br>Es mayor de edad: "+ persona.esMayorDeEdad() + "<br>Su genero es: " + persona.comprobarGenero();
 }
);
