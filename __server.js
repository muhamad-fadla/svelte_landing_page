const express = require('express');

const app = express();
const fs = require('fs')
const path = require('path')


app.use(express.static(path.join(__dirname,'/dist')))

let cached;

let SvelteApp = require('./dist/assets/vendor.fdfe2938.js')

app.get('/*', async (req,res) => {
	let file;

	console.log(typeof cached == "undefined")

	if(typeof cached == 'undefined'){
		console.log('Storage cached')
		file = fs.readFileSync(path.join(__dirname, '/dist/index.html'));
		cached = file.toString();
	}else{
		console.log('use cached')
		file = cached;
	}

	const {head, html} = SvelteApp.render({url: req.url});


	file.replace('<!-- app -->', html)
		.replace('<!-- head -->', head);

	res.setHeader('Content-Type','text/html; charset=UTF-8')

	res.status(200).end(file);
})



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
