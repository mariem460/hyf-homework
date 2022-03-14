const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
    if(!req.query.first || !req.query.second) {
        res.status(400).send("first and second query params are required eg: ?first=1&second=2");
        return;
    }
    const firstValue = parseInt(req.query.first);
    const secValue = parseInt(req.query.second);
    res.send(`${firstValue + secValue}`);
})

app.get("/numbers/multiply/:first/:second", (req, res) => {
    const firstValue = parseInt(req.params.first);
    const secValue = parseInt(req.params.second);
    res.send(`${firstValue * secValue}`);
})

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

