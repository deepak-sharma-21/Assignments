const express = require("express");
const PORT = 3000;
const homeController = require("./controller/home.controller")

let app = express();
app.use('/', homeController);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})