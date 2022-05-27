const express = require('express');
const blogsRoute = require('./routes/blogs/blogs.route');

const app = express();

const PORT = process.env.PORT || 5000;;

app.use(express.json());

app.use(blogsRoute)

app.listen(PORT, () => {
	console.log(`listening to port ${PORT}`);
});
