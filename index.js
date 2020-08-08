function index(req, res) {
    if( req.url !== '/' ) {
        return true; // sigue con el sgte
    }
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    const page = `<a href='/upload'>Upload</a> | <a href='/transform'>Transform</a>`;
    res.write( page );
    return false;
}

module.exports = index;
