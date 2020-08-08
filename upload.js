function uploadCloudinary(image) {
    return new Promise( (resolve, reject) => {
        require('dotenv').config();
        const cloudinary = require('cloudinary').v2;
        cloudinary.uploader.upload(image, (error, result) => {
            if(error){ 
                return reject( error );
            } 
            
            return resolve( result );
        });
    });
}

async function upload(req, res) {
    if(req.url !== '/upload') {
        return true; // sigue con la próxima función
    }

    try {
        const imageData = await uploadCloudinary('img/imagen.jpg');
        console.log('try ##############');
        res.writeHead(200, {'Content-Type': 'application/json'});
        console.dir( JSON.stringify( imageData ) );
        res.write( JSON.stringify( imageData ) );
    } catch(err) {
        console.log('catch ##############');
        console.dir( err );
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.write( "Ocurrió un error al subir la imagen." );
    }

    return false;
}

module.exports = upload;