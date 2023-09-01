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
    let asteric = [""];
    let mostrar = "";
    let final = "";
    for(let i=0; i<formulario.get('num'); i++){
      asteric[i] = ""
      for(let j = 0; j<=i; j++){
        asteric[i] += "*"
      }
    }
    for(let i in asteric){
      mostrar += asteric[i] + "<br>"
    }
    for(let i in mostrar){
      
      if(mostrar[i] == "*" && mostrar[i-1] == "*"){
        final += "O"
      }
      final += mostrar[i]
      
    }

    const pagina =
      `<!doctype html><html><head></head><body>
      <h3 style=text-align:center>${final}</h3><br>
     <a href="index.html">Retornar</a>
     </body></html>`
    respuesta.end(pagina)
  })
}

console.log('Servidor web iniciado')