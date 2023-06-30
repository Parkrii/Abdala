class CEmpleado {
  constructor(nombre, anio_de_ingreso, salario, direccion) {
    this.nombre = nombre;
    this.anio_de_ingreso = anio_de_ingreso;
    this.salario = salario;
    this.direccion = direccion;
  }

  mostrarDatos() {
    let n = this.direccion.search("WallStreet"), wall = "", fecha = new Date();

    if (n != -1) {
      wall = "WallStreet"
    }

    return `Datos:<br> ${this.nombre} ${this.anio_de_ingreso} ${wall} <br>Sus anios de antiguedad es: ${fecha.getFullYear() - this.anio_de_ingreso}`;
  }
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event)

 {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const anio_de_ingreso = document.getElementById('anio_de_ingreso').value;
  const salario = document.getElementById('salario').value;
  const direccion = document.getElementById('direccion').value;

  const empleado = new CEmpleado(nombre, anio_de_ingreso, salario, direccion);

  const mostrar = document.getElementById('mostrar');
  mostrar.innerHTML = empleado.mostrarDatos();
 }
);
