require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 5000;
const greeting = process.env.GREETING;
// im not muted

server.listen(port, () => {
  console.log(`\n*** Server ${greeting} Running on http://localhost:${port} ***\n`);
});
