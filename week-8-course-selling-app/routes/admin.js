const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
// bcrypt, zod, jsonwebtoken
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");

adminRouter.post("/signup", async function(req, res){
    const { email, password, firstName, lastName } = req.body;
        // TODO: Adding zod validation
        //> Hash the password so plaintext password is not stored in the Db.
        //> Put inside a try catch block
    
        await adminModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
    
        res.json({
            message: "signup endpoint"
        })
})

adminRouter.post("/signin", async function(req, res){
    const { email, password } = req.body;
    
        // TODO: Ideally password should be hashed, And you can't compare the user provided password and the database password.
    
        const admin = await adminModel.findOne({
            email: email,
            password: password
        });
    
        if(admin){
            const token = jwt.sign({
                id: admin._id
            }, JWT_Admin_PASSWORD);
    
            res.json({
                token: token
            })
    
        } else {
            res.status(403).json({
                message: "Incorrect Credentials"
            })
        }
})

adminRouter.post("/course", adminMiddleware, async function(req, res){

    const adminId = req.userId;

    const {title, description, imageUrl, price} = req.body;

    await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: "course created",
        courseId: courseModel._id
    })
})

adminRouter.put("/course", adminMiddleware, async function(req, res){

    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    },
        {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price
    })

    res.json({
        message: "course upated",
        courseId: courseModel._id
    })
})

adminRouter.get("/course/bulk", adminMiddleware, async function(req, res){

    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId
    });

    res.json({
         message: "Your courses",
         courses
    })
})

module.exports = {
    adminRouter: adminRouter
}