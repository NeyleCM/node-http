const objeto = require('./data')
const http = require('node:http');

const server = http.createServer((req, res) => {
  // Devuelve dos argumentos
  console.log('request recived');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node Neyle</title>
</head>
<body>
    <h1>Ejercicio Node</h1>
           <h2>${objeto.title}</h2>
           <h3>${objeto.subtitle}</h3>
           <p>${objeto.description}</p>
           <p>${objeto.descriptionDos}</p>
           <p>${objeto.example}</p>;
</body>
</html>`);
});

server.listen(0, () => {
  console.log(
    `server listening on port http://localhost:${server.address().port}`
  );
});
