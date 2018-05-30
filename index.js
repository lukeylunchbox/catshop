const express = require('express');
const bodyParser = require('body-parser')
const catRouter = require('./cats/catRouter')

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.redirect('/cats')
})

app.use('/cats', catRouter)

app.listen(3000, () => {
    console.log("Express server listening on port 3000 :D");
});

