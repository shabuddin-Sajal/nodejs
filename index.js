const http = require('http');

function  handler(req,res)
{
    switch(req.url)
    {
        case '/' :
            res.write("Home Page");
            res.end();
            break;
        
            case '/products' :
                res.write("products");
                res.end();
                break;
            case '/about' :
                res.write('About');
                res.end();
                break;
            default :
            res.write('default page');
            res.end();
            break;
    }
}
const server = http.createServer(handler);
const port = 4000;

const cb= ()=>{
    console.log("Server concetion established");
}
//async call 
server.listen(port,cb);
