const express = require('express')
const app = express()
const port = 4000
const postsList = require('./data/posts.js')
// public asset
app.use(express.static('public/imgs/posts'))

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})
app.get('/bacheca', (req, res) => {
    res.json(postsList)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
