const express = require("express");
const app = express();
const path = require("path")
const hbs = require("hbs")

require("./db/conn")


const port = process.env.PORT || 3000;


const staticPath = path.join(__dirname, "../public")
const templatesPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")



app.set('view engine', 'hbs')
app.set("views", templatesPath)
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath));




app.get("/", (req, res) => {
    res.render('index')
})
app.get("/login", (req, res) => {
    res.render('login')
})
app.get("/register", (req, res) => {
    res.render('register')
})



app.listen(port, (req, res) => {
    console.log(`server is running at port no ${port}`)
})