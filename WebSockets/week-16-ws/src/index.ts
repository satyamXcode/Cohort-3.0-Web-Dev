import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// event handler
wss.on("connection", function(socket){
    console.log("user connected")
    socket.send("Hello");

    setInterval(() => {
        socket.send("Current price of solana is " + Math.random()); 
    }, 500)

    socket.on("message", (e) => {
        console.log(e.toString());
    })
})