const monthObj = {
    01: ["Jan", 31], 02: ["Feb", 28], 03: ["Mar", 31],
    04: ["Apr", 30], 05: ["May", 31], 06: ["Jun", 30],
    07: ["Jul", 31], 08: ["Aug", 31], 09: ["Sep", 30],
    10: ["Oct", 31], 11: ["Nov", 30], 12: ["Dec", 31],
}


const dateIdentifier = (req, res) => {
    if (req.query.q) {

        let date = req.query.q;
        res.isValidDate = date.length === 8 ? true : false;
        
        let year = +date.slice(4);                     //segregation of day,month and year
        let month = +date.slice(2, 4);
        let day = +date.slice(0, 2);

        if(Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)){ //checking if all the values are valid numbers
            res.isValidDate = false;
        }

        if (res.isValidDate) {

            res.isLeapYear = false;                        //Checking for leap year
            if (year % 4 === 0) {
                if (year % 400 === 0 || year % 100 !== 0) {
                    res.isLeapYear = true;
                }
            }


            //Checking for month
            if (month > 12) {
                res.isValidDate = false;
            }
            else {
                res.month = monthObj[month][0]
                res.lastDay = res.isLeapYear && month === 02? monthObj[month][1] + 1 : monthObj[month][1]
            }


            //Checking for valid day
            if (day > res.lastDay || day < 1) {
                res.isValidDate = false;
            }
        }
    }
}

module.exports = dateIdentifier