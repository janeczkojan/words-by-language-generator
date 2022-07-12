const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');


const PORT = 4300;


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


for (let route of routes) {
	app.get(route.url, route.action);
}


app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
