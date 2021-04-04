const express = require('express');
const getData  = require('./scrap.js')
const cors = require('cors')
const path = require('path');
const app = express();

app.use(cors())
app.use(express.static('public'))

app.get('/api/currency/:first&:second', async(req, res) => {
    const price = getData(req.params.first, req.params.second).then(price => {
	console.log(price)
	res.json(price);
    });
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(3030);
