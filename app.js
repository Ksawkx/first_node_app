const express = require('express')
const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.send('I am alive')
})
app.get('/about', (req, res) => {
    res.send('Yes, I am still alive')
})

app.listen(port)