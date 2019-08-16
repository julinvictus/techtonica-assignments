//console.log("learning to use Node.js");

////index into each property to print the first items in each property's array.
// const seacreaturres = {
//     fish : ['piranha', 'nemo'],
//     mammals : ['shark', 'whale'],
//     invertebrates : ['seastar', 'shrimp']
// };
    
// for (let keys in seacreaturres){
//     console.log(seacreaturres[keys][0]);
// }
    
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
    if (err){
        throw err;
    }
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader = ('Content-type', 'text/html');
        res.write(html);
        res.end();
    });
    server.listen(port, hostname, () => {
        console.log(`Server running on port ${port} ...`)
    });
});

