const { Router } = require("express");
const { courseModel } = require("../db");

const courseRouter = Router(); //Instance of router class

courseRouter.post("/purchase", function(req, res){
    res.json({
        message: "purchase endpoint"
    })
})

courseRouter.get("/preview", function(req, res){
    res.json({
        message: "preview endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}