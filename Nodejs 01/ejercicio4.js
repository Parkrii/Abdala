const os = require('os')

console.log('Memoria libre:' + os.freemem())
let vector = []

for (let i = 0; i < 1000000; i++) {
  vector.push(i)
}

console.log('Memoria libre despues de crear el vector:' + os.freemem())