const User = require('../models/user.model');
const jwt = require('jsonwebtoken')
exports.signIn = async (req, res) => {
    try {
        
        const username = req.body.username;
        const password = req.body.password;

        if(!(username && password)) {
            return res.status(400).json({
                success: false,
                message: "please provide username & password"
            });
        }

        const user = await User.findOne({
            username
        });

        if(!user) {
            return res.status(401).json({
                success: false,
                message: "Username or password is Invalid!"
            });
        }

        if(user.password === password) {

            const token = jwt.sign(user.username, "SECRET", {
                expiresIn: "1d"
            });

            return res.status(200).json({
                success: true,
                message: "Login successful",
                token
            });
        }
        return res.status(401).json({
            success: false,
            message: "Invalid username & password!"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
}

exports.signUp = async (req, res) => {
    try {
        
        const username = req.body.username;
        const password = req.body.password;

        if(!(username && password)) {
            return res.status(400).json({
                success: false,
                message: "please provide username & password"
            });
        }

        const user = await User.findOne({
            username
        });

        if(user) {
            return res.status(400).json({
                success: false,
                message: "Username is already taken!"
            });
        }

        const newUser = new User({
            username, password
        });
        await newUser.save();

        const token = jwt.sign(username, "SECRET", {
            expiresIn: "1d"
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: newUser,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
}