var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing")
});

app.get("/measurements", function (req, res){
    var measurements = [
        {name: "Radek", weight: 74, bodyfat: 22},
        {name: "Marek", weight: 84, bodyfat: 27},
        {name: "Michal", weight: 91, bodyfat: 19}
    ];

    res.render("measurements", {measurements:measurements})
});
// Dodatkowy komentarz
app.listen(3000, function (){
    console.log("The bodyfat server has started on port 3000.");
});
