import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let userCount = 1;

wss.on("connection", (socket) => {
  userCount = userCount + 1;
  console.log("user connnected #" + userCount);

  socket.on("message", (message) => {
    console.log("message received " + message.toString());
    setTimeout(() => {
      socket.send(message.toString() +": sent from the server");
    }, 1000);
  });
});
