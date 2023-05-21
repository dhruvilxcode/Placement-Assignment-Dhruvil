const express = require("express");
const posts = require("./posts.json");

const app = express();


// middleware
const myMiddleware = (req, res, next)=>{
    const isHeaderPresent = req.headers['authorization'].startsWith("Bearer")
    if(!isHeaderPresent) {
        return res.status(403).json({
            success: false,
            message: "You're not authorized"
        });
    }

    const token = req.headers['authorization'].split(" ")[1];

    if(!token) {
        return res.status(403).json({
            success: false,
            message: "You're not authorized"
        });
    }

    next();
};

// post route
app.get("/post", myMiddleware, (req, res)=>{
    res.status(200).json(posts);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server started on : ${PORT}`);
})