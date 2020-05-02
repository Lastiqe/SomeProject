const express = require('express')
const fs = require('fs')
const app = express()
const port = 4000

let rawData = fs.readFileSync(__dirname + '/data.json')
let users = JSON.parse(rawData)

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.get('/users', function (req, res) {
    const page = req.query.page
    const limit = req.query.limit

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const results = {}
    results.results = users.slice(startIndex, endIndex)
    res.json(results)
})


