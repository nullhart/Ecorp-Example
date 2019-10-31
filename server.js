const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes").router




//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//API Routes
app.use("/api", routes)


app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})


const port = process.env.PORT || 8080;



app.listen(port, () => console.log(`Simple_API is listening on port ${port}!`))

