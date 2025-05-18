const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path')
const app = express();

app.use(express.json());
app.use(cors())

console.log(path.join(__dirname, '/client/dist'))
app.use(express.static(path.join(__dirname, '/client/dist')))
app.get("/*\w", (req, res) => res.sendFile(path.join(__dirname, '/client/dist/index.html')))

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
})