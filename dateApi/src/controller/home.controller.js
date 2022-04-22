const express = require("express");
const dateIdentifier = require("../middleware/dateIdentifier.middleware");
let router = express.Router();

router.get('/', dateIdentifier, (req, res) => {

    if (req.query.q) {
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