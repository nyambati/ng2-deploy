const express = require('express');
// creating our app class
class App {
  constructor() {
      this.staticFolder = `${__dirname}/public`;
      this.app = express();
      this.middlewares();
      this.route();
    }
    // All our middleare will be defined here
  middlewares() {
    this.app.use(express.static(this.staticFolder));
  }

  // The app routes
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
// start the express sever
server.app.listen(port, error => {
  if (error) {
    return console.log(error);
  }
  console.log(`server running on port ${port}`);
});
