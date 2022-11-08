const http = require("http");

// Here we’ve added a callback. This time, we are using the new arrow function syntax but it’s still a callback function. This callback function receives two parameters from the HTTP package: request and response. These are both objects that represent the request we received from a client and the response we will send back from our server.

// The response has methods that allow us to control what a client receives from us. Right now clients will always get the same thing: Hello, world!.

const server = http.createServer((request, response) => {
  console.log(`Someone has requested ${request.url}`);

  if (request.url === "/") {
    response.write("Hello, world!");
    response.end();
  } else if (request.url === "/about") {
    response.write("My name is Daniel");
    response.end();
  } else {
    response.statusCode = 404;
    response.write("404 Page");
    response.end();
  }
});

server.listen(3000);
