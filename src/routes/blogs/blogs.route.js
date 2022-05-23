const express = require('express');
const { httpGetBlogs, httpAddBlog } = require('./blogs.controller');

const blogsRoute = express.Router()

blogsRoute.post('/add_blog', httpAddBlog);

blogsRoute.get('/blogs', httpGetBlogs);

module.exports = blogsRoute