const express = require('express');


class App {

  constructor() {
    this.staticFolder = `${__dirname}/public`;
    this.app = express();
    this.middleware();
    this.route();
  }

  middleware() {
    this.app.use(express.static(this.staticFolder));
  }

  route() {
    this.app.get('/*', (req, res) => {
      res.sendFile('index.html', {
        root: this.staticFolder
      });
    });
  }
}


const server = new App();
const port = Number(process.env.PORT) || 3000;

server.app.listen(port, error => {
  if (error) {
    return console.log(error);
  }

  console.log(`server running on port ${port}`);
});
