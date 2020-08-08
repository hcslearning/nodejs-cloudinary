function getParsedUrl(req) {
    const url = require('url');
    return url.parse(req.url, true);
}

async function transform(req, res) {
    const pathname = getParsedUrl(req).pathname;
    if( pathname !== '/transform' ) {
        return true;
    }

    require('dotenv').config();
    const cloudinary = require('cloudinary').v2;

    const imagePublicId = getParsedUrl(req).query.public_id;
    const htmlImage = cloudinary.image(imagePublicId, {transformation: {width: 200, crop: "pad"}});
    
    const transformPage = `
        PUBLIC_ID = ${imagePublicId} <br /><br />

        ${htmlImage}

    `;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write( transformPage );

    return false;
}

module.exports = transform;
