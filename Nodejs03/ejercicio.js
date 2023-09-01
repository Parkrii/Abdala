const http = require('http')
const fs = require('fs/promises')

const mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg',
  'ico': 'image/x-icon',
  'mp3': 'audio/mpeg3',
  'mp4': 'video/mp4'
}

const servidor = http.createServer((pedido, respuesta) => {
  const url = new URL('http://localhost:8888' + pedido.url)
  let camino = 'public' + url.pathname
  if (camino == 'public/')
    camino = 'public/index.html'
  encaminar(pedido, respuesta, camino)
})

servidor.listen(8888)


function encaminar(pedido, respuesta, camino) {
  console.log(camino)
  switch (camino) {
    case 'public/recuperardatos': {
      recuperar(pedido, respuesta)
      break
    }
    default: {
      fs.stat(camino)
        .then(() => {
          fs.readFile(camino)
            .then(contenido => {
              const vec = camino.split('.')
              const extension = vec[vec.length - 1]
              const mimearchivo = mime[extension]
              respuesta.writeHead(200, { 'Content-Type': mimearchivo })
              respuesta.write(contenido)
              respuesta.end()
            })
            .catch(error => {
              respuesta.writeHead(500, { 'Content-Type': 'text/plain' })
              respuesta.write('Error interno')
              respuesta.end()
            })
        })
        .catch(error => {
          respuesta.writeHead(404, { 'Content-Type': 'text/html' })
          respuesta.end('<h1>Error 404: No existe el recurso solicitado</h1>')
        })
    }
  }
}


function recuperar(pedido, respuesta) {
  let info = ''
  pedido.on('data', datosparciales => {
    info += datosparciales
  })
  pedido.on('end', () => {
    const formulario = new URLSearchParams(info)
    console.log(formulario)
    respuesta.writeHead(200, { 'Content-Type': 'text/html' })
    let letra = formulario.get('letra')
    let num = parseInt(Math.random()*3)
    let bot = ""
    let msg = ""
    if( letra == "p" && num == 2 || letra == "a" && num == 0 || letra == "t" && num == 1 ){
      msg = "VICTORY"
    } if( letra == "p" && num == 1 || letra == "a" && num == 2 || letra == "t" && num == 0 ){
      msg = "DEFEAT"
    } if( letra == "p" && num == 0 || letra == "a" && num == 1 || letra == "t" && num == 2 ){
      msg = "DRAW"
    }
    
    if( num == 0 ){
      bot = "Piedra"
    } if( num == 1 ){
      bot = "Papel"
    } if( num == 2 ){
      bot = "Tijera"
    }

    const pagina =
      `<!doctype html><html><head></head><body>
      <p>Piedra, papel o tijera? (p/a/t):${letra}</p>
      <p>El servidor a eligido:${bot}</p>
      <p>${msg}</p>
     <a href="index.html">Retornar</a>
     </body></html>`
    respuesta.end(pagina)
  })
}

console.log('Servidor web iniciado')