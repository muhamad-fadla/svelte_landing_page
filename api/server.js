const express = require('express');

const app = express();
const fs = require('fs')
const path = require('path')


app.use(express.static(path.resolve('./../dist')))

app.get('*', async (req,res) => {

	const file = fs.readFileSync(path.resolve('../dist/index.html'));

	res.status(200).end(file);
})


const port = process.env.PORT || 3000;

// app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
module.exports = server;
