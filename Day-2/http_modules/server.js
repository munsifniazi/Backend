const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello Munsif Khan</h1>');
    res.end();
  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>About Munsif Khan</h1>
      <p>Heyy I am a full stack web developer</p>`);
    res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>404 Page Not Found</h1>');
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
