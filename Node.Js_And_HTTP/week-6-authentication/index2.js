const express = require("express");  
const jwt = require('jsonwebtoken');  

// JWT secret key (Note: In production, use environment variables to store secrets)  
const JWT_SECRET = "Pulkit@gmail";  

const app = express();  

// Middleware to parse incoming JSON requests (req.body will be available)  
app.use(express.json());  

// Temporary in-memory "database" for users (Note: Use a real database in production)  
const users = [];  

// Signup Route: Allows users to register (stores username & password in memory)  
app.post("/signup", function(req, res){  
   const username = req.body.username;  
   const password = req.body.password;  

   // Add user to the array (Warning: No password hashing or duplicate checks!)  
   users.push({  
    username: username,  
    password: password  
   });  

   // Success response (Note: In real apps, return minimal user data, not confirmation)  
   res.json({  
    message: "You are signed in"  
   });  
});  

// Signin Route: Validates credentials & returns a JWT token for authentication  
app.post("/signin", function(req, res){  
    const username = req.body.username;  
    const password = req.body.password;  

    // Linear search for user (Note: Inefficient for large datasets; use DB indexing)  
    let foundUser = null;  
    for(let i = 0; i < users.length; i++){  
        if(users[i].username == username && users[i].password == password){  
            foundUser = users[i];  
        }  
    }  

    if(foundUser){  
        // Generate JWT token (contains username payload, signed with JWT_SECRET)  
        const token = jwt.sign({  
            username: username  
        }, JWT_SECRET);  

        // Return token to client (Note: Store this token securely on the client side)  
        res.json({  
            token: token  
        });  
    } else {  
        // Authentication failed (Note: 403 Forbidden is okay, but 401 Unauthorized is more standard)  
        res.status(403).send({  
            message: "Invalid username or password"  
        });  
    }  
});  

// Protected Route: Fetches user details if a valid JWT is provided  
app.get("/me", function(req, res){  
    // Extract JWT token from headers (Note: Standard practice is 'Authorization: Bearer <token>')  
    const token = req.headers.token;  

    // Verify token integrity & decode payload (Throws error if invalid)  
    const decodedInformation = jwt.verify(token, JWT_SECRET);  
    const username = decodedInformation.username;  

    // Find user in memory (Again, use a database in production)  
    let foundUser = null;  
    for(let i = 0; i < users.length; i++){  
        if(users[i].username == username){  
            foundUser = users[i];  
        }  
    }  

    if(foundUser){  
        // Return user data (Security Note: Never expose passwords, even hashed ones!)  
        res.json({  
            username: foundUser.username,  
            password: foundUser.password  
        });  
    } else {  
        // Token was valid but user not found (Edge case: User deleted after token issuance)  
        res.json({  
            message: "token invalid"  
        });  
    }  
});  

// Start server on port 3000 (Always log server status in real apps)  
app.listen(3000);  