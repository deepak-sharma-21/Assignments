const express = require("express");
const dateIdentifier = require("../utils/dateIdentifier");
let router = express.Router();

router.get('/', (req, res) => {

    if (req.query.q) {
        dateIdentifier(req,res)
        if (res.isValidDate) {
            res.status(200).json({ "month": res.month, "lastDay": res.lastDay, "isLeapYear": res.isLeapYear })
        }
        else {
            res.status(400).send("Invalid date or format")
        }
    }
    else {
        res.send("Empty query")
    }

})

module.exports = router