const express = require('express')
const app = express()

// Can store local server in PORT variable
const PORT = 8080;

const dbConnection = require("./db/index");

const startServer = async () => {
//This checks to see if our models are in the database and if not, it'll create the tables. Good to do before turning the server on.
    await dbConnection.sync()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}!~`)
    })
}
startServer();

app.get('/', (req, res) => {
    res.send("Hello :)")
})