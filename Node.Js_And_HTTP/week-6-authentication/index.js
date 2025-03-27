const express = require("express"); // Import Express framework for building the server
const app = express(); // Initialize Express application

// Middleware to parse incoming JSON requests (enables req.body in routes)
app.use(express.json());

// Temporary in-memory "database" for users (⚠️ Volatile: resets on server restart)
const users = [];

// Helper function to generate a random 32-character token (alphanumeric)
function generateToken() {
    // All possible characters for the token (a-z, A-Z, 0-9)
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    // Build a 32-character token by randomly selecting from `options`
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)]; // Random index
    }
    return token;
}

// Signup Route: Stores username/password in memory (⚠️ No validation/hashing!)
app.post("/signup", function(req, res){
   const username = req.body.username; // Extract username from request body
   const password = req.body.password; // Extract password from request body

   // Add user to the array (⚠️ Passwords stored in plaintext!)
   users.push({
    username: username,
    password: password
   });

   // Success response (✅ But avoid confirming "signed in" for signup)
   res.json({
    message: "You are signed in"
   });
});

// Signin Route: Validates credentials and returns a token
app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    // Linear search for user (⚠️ Inefficient for large datasets; use DB in production)
    let foundUser = null;
    for(let i = 0; i < users.length; i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i];
        }
    }

    if(foundUser){
        const token = generateToken(); // Generate random token
        foundUser.token = token; // Attach token to user (⚠️ Token stored in memory)
        res.json({
            token: token // Return token to client (✅ But add expiry in production)
        });
    } else {
          // Authentication failed (Note: 403 Forbidden is okay, but 401 Unauthorized is more standard)  
        res.status(403).send({  
            message: "Invalid username or password"  
        }); 
    }
});

// Protected Route: Validates token and returns user data
app.get("/me", function(req, res){
    const token = req.headers.token; // Extract token from headers (⚠️ Use 'Authorization' header standard)
    let foundUser = null;

    // Search for user by token (⚠️ Linear search is inefficient)
    for(let i = 0; i < users.length; i++){
        if(users[i].token == token){
            foundUser = users[i];
        }
    }

    if(foundUser){
        // Return user data (⚠️ Exposing password is a security risk!)
        res.json({
            username: foundUser.username,
            password: foundUser.password
        });
    } else {
        res.json({
            message: "token invalid" // ❌ Use 401 status code for auth failures
        });
    }
});

// Start server on port 3000 (✅ Always log startup: console.log("Server running on 3000"))
app.listen(3000);