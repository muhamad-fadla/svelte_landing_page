const express = require('express');

const app = express();
const fs = require('fs')
const path = require('path')
const compression = require('compression');



app.use(express.static(path.resolve('dist')))

app.get('*', async (req,res) => {

	const file = fs.readFileSync(path.resolve('dist/index.html'));

	res.status(200).end(file);
})


app.listen(3000, () => console.log(`Server running on PORT: 3000`))