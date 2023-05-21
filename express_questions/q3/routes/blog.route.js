const {Router} = require("express");
const { getAllBlogs, addBlog, updateBlog, replaceBlog, deleteBlog } = require("../controllers/blog.controller");

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
router.post("/add", addBlog);

/**
 * @route /blogs/:id/update
 * @description update blog
 * @params id, title, content
 * @returns success
 *  */ 
router.put("/:id/update", updateBlog);

/**
 * @route /blogs/:id/replace
 * @description replace blog
 * @params id, title, content
 * @returns success
 *  */ 
router.put("/:id/replace", replaceBlog);

/**
 * @route /blogs/:id/delete
 * @description delete blog
 * @returns deleted blog
 *  */ 
router.delete("/:id/delete", deleteBlog);

module.exports = router;