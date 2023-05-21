const express = require('express');
require('dotenv').config({});
require('./config/db');

const blogRoutes = require("./routes/blog.route");

const app = express();

app.use(express.json());

app.use("/blogs", blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})