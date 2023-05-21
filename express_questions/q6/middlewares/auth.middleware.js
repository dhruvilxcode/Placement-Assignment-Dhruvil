const jwt = require('jsonwebtoken')

exports.isAuthenticated = (req, res, next)=>{
    const isHeaderPresent = req.headers['authorization'].includes("Bearer");
    if(!isHeaderPresent) {
        return res.status(403).json({
            success: false,
            message: "Not authorized"
        });
    }

    const token = req.headers['authorization'].split(" ")[1];

    try {
        const decodedToken = jwt.verify(token, "SECRET");
        req.user = decodedToken;
        return next();
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: "Not authorized"
        });
    }

}