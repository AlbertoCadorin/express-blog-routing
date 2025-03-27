const express = require('express')
const app = express()
const port = 3000
const router = require('./router/posts.js')


// public asset
app.use(express.static('public/imgs/posts'))

app.get('/', (req,res)=>{
    res.send('Ciao')
})

app.use('/posts', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
