const express = require("express")
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require('https');

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use("/public" , express.static(__dirname+"/public"))

app.get("/" ,function(req, res) {
    res.render("home")
  })

app.post("/picture" ,function(req, res) {
    var picture =  req.body.picture
    var name= picture.replace(/\s+/g, '');
    switch(name) {
        case "Cat":
            res.render("picture",{value:"1"})
            break
        case "Dog":
            res.render("picture",{value:"3"})
            break
        case "CatandDog":
            res.render("picture",{value:"2"})
            break
    }
})

app.listen(8080, function() {
    console.log("Server started on port 8080");
  })

