const blog = require("../models/blog.model");

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blog.find({});
        return res.status(200).json(blogs);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong, try later!"
        });
    }
}

exports.addBlog = async (req, res) => {
    try {
        const title = req.body.title;
        const content = req.body.content;

        if(!(title && content)) {
            return res.status(400).json({
                success: false,
                message: "Please provide required params"
            });
        }

        const newBlog = new blog({
            title,
            content
        });

        const savedBlog = await newBlog.save();

        return res.status(200).json({
            success: true,
            message: "Blog Added."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong, try later!"
        });
    }
}

exports.updateBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const title = req.body.title;
        const content = req.body.content;

        if(!(title && content)) {
            return res.status(400).json({
                success: false,
                message: "Please provide required params"
            });
        }

        const updatedBlog = await blog.findOneAndUpdate({
            _id: id
        }, {
            $set: {
                title,
                content
            }
        });

        return res.status(200).json({
            success: true,
            message: "Blog updated.",
            updatedBlog
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong, try later!"
        });
    }
}

exports.replaceBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const title = req.body.title;
        const content = req.body.content;

        if(!(title && content)) {
            return res.status(400).json({
                success: false,
                message: "Please provide required params"
            });
        }

        const updatedBlog = await blog.findOneAndReplace({
            _id: id
        }, {
            $set: {
                title,
                content
            }
        });

        return res.status(200).json({
            success: true,
            message: "Blog replaced.",
            updatedBlog
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong, try later!"
        });
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;

        const deletedBlog = await blog.findOneAndDelete({
            _id: id
        });

        return res.status(200).json({
            success: true,
            message: "Blog removed.",
            deletedBlog,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong, try later!"
        });
    }
}