const express = require('express');

const app = express();
const fs = require('fs')
const path = require('path')


app.use(express.static(path.join(__dirname,'/dist')))

let cached;

app.get('*', async (req,res) => {
	let file;

	console.log(typeof cached == "undefined")

	if(typeof cached == 'undefined'){
		console.log('Storage cached')
		file = fs.readFileSync(path.join(__dirname, '/dist/dot.html'));
		cached = file;
	}else{
		console.log('use cached')
		file = cached;
	}


	res.status(200).end(file);
})


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
