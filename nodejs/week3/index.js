const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));
//warmup
//calculator
//Getting data through query parameters using GET
//multiply
app.get("/calculator/multiply", (req, res) => {
    if(!req.query.first || !req.query.second) {
        return res.status(400).send("first and second query params are required eg: ?first=1&second=2");
    }

    if (!Array.isArray(req.query.first) && !Array.isArray(req.query.second)) {
        const firstValue = parseInt(req.query.first);
        const secValue = parseInt(req.query.second);
        const result1 = `${firstValue * secValue}`;
        return res.send(`${result1}`)
    }
    if (Array.isArray(req.query.first) && !Array.isArray(req.query.second)) {
        const firstArrayParams = req.query.first;
        let sum = firstArrayParams.reduce(function (previousValue, currentValue) {
            return previousValue * currentValue;
        });
        const result2 = sum * req.query.second;
        console.log(result2)
        return res.send(`${result2}`)
    }
    if (Array.isArray(req.query.second) && !Array.isArray(req.query.first)) {
        const secondArrayParams = req.query.second;
        let sum = secondArrayParams.reduce(function (previousValue, currentValue) {
            return previousValue * currentValue;
        });
        const result3 = sum * req.query.first;
        console.log(result3)
        return res.send(`${result3}`)
    }
    if (Array.isArray(req.query.second) && Array.isArray(req.query.first) ) {
        const firstArrayParams = req.query.first;
        const secondArrayParams = req.query.second;
        const mainArray = firstArrayParams.concat(secondArrayParams);
        let sum = mainArray.reduce(function (previousValue, currentValue) {
            return previousValue * parseInt(currentValue);
        }, 1);
        console.log(`${mainArray}`)
        return res.send(`${sum}`)
    }
})

//add
app.get("/calculator/add", (req, res) => {
    if(!req.query.first || !req.query.second) {
        res.status(400).send("first and second query params are required eg: ?first=1&second=2");
        return;
    }
    const firstValue = parseInt(req.query.first);
    const secValue = parseInt(req.query.second);
    res.send(`${firstValue + secValue}`);
    
})


//Getting data through the request body using POST
//multiply
app.post("/calculator/multiply", (req, res) => {
    if(!req.query.first || !req.query.second) {
        res.status(400).send("first and second query params are required eg: ?first=1&second=2");
        return;
    }
    const firstValue = parseInt(req.query.first);
    const secValue = parseInt(req.query.second);
    res.send(`${firstValue * secValue}`);
})
//division
app.post("/calculator/division", (req, res) => {
    if(!req.query.first || !req.query.second) {
        res.status(400).send("first and second query params are required eg: ?first=1&second=2");
        return;
    }
    const firstValue = parseInt(req.query.first);
    const secValue = parseInt(req.query.second);
    res.send(`${firstValue / secValue}`);
})

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));