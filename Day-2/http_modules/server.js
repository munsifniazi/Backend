const http = require('http');
const server = http.createServer((req, res) => {
    
});
const Port = 3000;


server.listen(Port, () => {
  console.log(`server is running on http://localhost:${Port}`);
});
