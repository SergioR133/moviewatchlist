const express = require('express')
const app = express()

// Can store local server in PORT variable
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!~`)
})

app.get('/', (req, res) => {
    res.send("Hello :)")
})