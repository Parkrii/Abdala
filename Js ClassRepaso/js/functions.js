class CRectangulo {
  constructor(altura, longitud) {
    this.altura = altura;
    this.longitud = longitud;
  }

  mostrarArea() {
    return `La area es: ${this.altura * this.longitud}`;
  }
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event)

 {
  event.preventDefault();

  const altura = document.getElementById('altura').value;
  const longitud = document.getElementById('longitud').value;

  const rectangulo = new CRectangulo(altura, longitud);

  const areaRectangulo = document.getElementById('areaRectangulo');
  areaRectangulo.innerHTML = rectangulo.mostrarArea();
 }
);
