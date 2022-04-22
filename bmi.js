const express=require("express");
const bodyParser=require("body-parser");
const app=express(); 

app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator",(req,res) => {
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",(req,res) => {
    var kg=parseFloat(req.body.weight);
    var m=parseFloat(req.body.height);

    var result=kg/(m*m);
    res.send(`the bmi index of respective person is ${result} `);
})


app.listen(3000,() => {
    console.log("starting at port number 3000");
})