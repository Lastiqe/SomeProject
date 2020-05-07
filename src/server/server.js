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

const sortBy = (arr, method) => {
    switch (method) {
        case "id":
            return arr.slice().sort((a, b) => (a.id > b.id ? 1 : -1));
        case "name":
            return arr.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
        case "age":
            return arr.slice().sort((a, b) => (a.age > b.age ? 1 : -1));
        default:
            return arr;
    }
}

app.get('/users', function (req, res) {
    const page = req.query.page
    const limit = req.query.limit
    const sortType = req.query.sortType
    const sortOrder = req.query.sortOrder

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const sortedArr = sortOrder === 'toGreat' ? sortBy(users, sortType).reverse() : sortBy(users, sortType)
    const results = {
        data: '',
        totalCount: ''
    }

    results.data = sortedArr.slice(startIndex, endIndex)
    results.totalCount = sortedArr.length
    res.json(results)
})

