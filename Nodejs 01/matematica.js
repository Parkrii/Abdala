const PI = 3.14

function sumar(x1, x2) {
  return x1 + x2
}

function restar(x1, x2) {
  return x1 - x2
}

function dividir(x1, x2) {
  if (x2 == 0) {
    mostrarErrorDivision()
  }
  else {
    return x1 / x2
  }
}

function mostrarErrorDivision() {
  console.log('No se puede dividir por cero')
}

exports.sumar = sumar
exports.restar = restar
exports.dividir = dividir
exports.PI = PI

const mat = require('./matematica')

console.log('La suma de 2+2=' + mat.sumar(2, 2))
console.log('La resta de 4-1=' + mat.restar(4, 1))
console.log('La división de 6/3=' + mat.dividir(6, 3))
console.log('El valor de PI=' + mat.PI)