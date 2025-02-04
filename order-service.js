const express = require('express');
const app = express();
const port = 5003

app.get('/orderview', (req, res) => {
    return res.json([
        { id: 1, product: "MILK", quantity: 10 },
        { id: 2, product: "BREAD", quantity: 5 },
    ])
})

app.listen(port, () => {
    console.log('Order Service Server is running on PORT NO: ', port)
})