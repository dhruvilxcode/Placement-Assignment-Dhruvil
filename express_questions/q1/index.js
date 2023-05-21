const express = require("express");
const posts = require("./posts.json");

const app = express();


// post route
app.get("/post", (req, res)=>{
    res.status(200).json(posts);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server started on : ${PORT}`);
})