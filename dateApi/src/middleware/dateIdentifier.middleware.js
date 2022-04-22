const dateIdentifier = (req, res, next) => {

    if (req.query.q) {

        let date = req.query.q;
        res.isValidDate = date.length === 8 ? true : false;

        if (res.isValidDate) {

            let year = +date.slice(4);                     //segregation of day,month and year
            let month = +date.slice(2, 4);
            let day = +date.slice(0, 2);

            res.isLeapYear = false;                        //Checking for leap year
            if (year % 4 === 0) {
                if (year % 400 === 0 || year % 100 !== 0) {
                    res.isLeapYear = true;
                }
            }

            //Checking for month
            const monthObj = {
                01: "Jan", 02: "Feb", 03: "Mar",
                04: "Apr", 05: "May", 06: "Jun",
                07: "Jul", 08: "Aug", 09: "Sep",
                10: "Oct", 11: "Nov", 12: "Dec",
            }

            if (month > 12) {
                res.isValidDate = false;
            }
            else {
                res.month = monthObj[month]
            }


            //Checking for lastDay
            res.lastDay = null;
            if (month === 02) {
                res.lastDay = res.isLeapYear ? 29 : 28
            }
            else if (month === 01 || month === 03 || month === 05 || month === 07 || month === 08 || month === 10 || month === 12) {
                res.lastDay = 31
            }
            else {
                res.lastDay = 30
            }


            //Checking for valid day
            if (day > res.lastDay) {
                res.isValidDate = false;
            }
        }
    }
    next()
}

module.exports = dateIdentifier