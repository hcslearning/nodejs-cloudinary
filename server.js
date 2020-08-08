const http = require('http');

const index     = require('./index');
const upload    = require('./upload');
const transform = require('./transform');

const server = new http.Server();
server.on('request', async (req, res) => {    

    if(
        index(req, res) 
        && await upload(req, res)
        && await transform(req, res)
    ) {
        // todo es true, no entro en ninguna funcion
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write( 'Página no existe' );
    }

    // finaliza response
    console.log("Finalizando la Respuesta HTTP ....");
    res.end();
});

const port = 3000;
console.log("Listen on port "+port);
server.listen( port );
