const db = require("../../database/config");

async function httpAddBlog(req, res) {
	const { author, author_id, blog_body } = req.body;
	try {
		query = 'insert into blogs (author, author_id, blog_content) values ($1, $2, $3)';
		values = [ author, author_id, blog_body ];
		await db.any(query, values);
	} catch (err) {
		return res.status(500).json(`Error: ${err.message}`);
	}
	return res.json('You have added a blog successfully');
}

async function httpGetBlogs(req, res) {
	const count = await db.any('select count(*) from blogs').then((data) => parseInt(data[0].count));
	const data = await db.any('select * from blogs');
	return res.json({
		blogs: data,
		count
	});
}

module.exports = { httpAddBlog, httpGetBlogs };
