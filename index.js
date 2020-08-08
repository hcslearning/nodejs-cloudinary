require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload("img/imagen.jpg", function(error, result){
    console.log( result, error );
});
