const {Router} = require("express");
const { getAllBlogs, addBlog, updateBlog, replaceBlog, deleteBlog } = require("../controllers/blog.controller");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const router = Router();

/**
 * @route /blogs/
 * @description get all blogs
 * @returns list of all blogs in array
 *  */ 
router.get("/", getAllBlogs);

/**
 * @route /blogs/add
 * @description add blog
 * @params title, content
 * @returns success
 *  */ 
router.post("/add", isAuthenticated, addBlog);

/**
 * @route /blogs/:id/update
 * @description update blog
 * @params id, title, content
 * @returns success
 *  */ 
router.put("/:id/update", isAuthenticated, updateBlog);

/**
 * @route /blogs/:id/replace
 * @description replace blog
 * @params id, title, content
 * @returns success
 *  */ 
router.put("/:id/replace", isAuthenticated, replaceBlog);

/**
 * @route /blogs/:id/delete
 * @description delete blog
 * @returns deleted blog
 *  */ 
router.delete("/:id/delete", isAuthenticated, deleteBlog);

module.exports = router;