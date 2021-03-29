
//slam express? to use request and response to the server
const express = require("express");
const app = express();

//now we want to add .html file to the .js server that we just created so ? this PATH module is mandatory
const path = require("path");


const hbs = require("hbs");//if we dont use this?partials cant be used.

//connected the conn.js file which includes db of the localhost from the mongodb compass
require("./db/conn");
const Register = require("./models/registers");

//why listen?this app.js will find where to show the output? well this is the place whichh is a simple port generator or if we created a port of 3000 it goes there.
const port = process.env.PORT || 3000;

const static_path=path.join(__dirname, "../public1");//varibale of #CSS PATH

const template_path=path.join(__dirname, "../templates/views");//variable of  #VIEWS PATH. without this? 

const perks=path.join(__dirname, "../templates/partials");// variable of #PERKS PATH.



app.use(express.json());
app.use(express.urlencoded({extended:false}));





app.use(express.static(static_path)); /*Hey express app!PRint this im letting you know that this is the html file i.e first priority*/


app.set("view engine","hbs");/*always remember I have to use this sentence whever we use handle bars
so? do "express.static" prints hbs files if no html file is present?.....NO!* but we can print handle bars
by using these response/the backup plan we say */

app.set("views",template_path);/*dear app kindly go to this given views file  "path"  and print whatever in the views
i.e give the file name and give its path */

hbs.registerPartials(perks);//how to enable use of perks in views?

/*this app variable? use req and res which are the functions of express() here reponse is used? yes a message is displayed..
Wanna backup something? res.send("your message")
Wanna backup something by using a file?res.render("index")*/
app.get("/", (req, res)=>
{
res.render("indexs");
}); 

app.get("/register", (req, res) =>
{
    res.render("register");
})

//create a new user in our database
app.post("/register",async (req,res)=>
{
try{

    const password = req.body.password;
    const cpassword=req.body.confirmpassword;
if(password===cpassword)
{
    const registerEmployee = new Register({
      
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            gender: req.body.gender,
            phone: req.body.phone,
            age: req.body.age,
            password: password,
            confirmpassword:cpassword
       
    })

    const registered = await registerEmployee.save();
    res.status(201).render("indexs");
}

else{
    res.send("password are not matching")
}

}
catch(error)
{
res.status(400).send(error);
}
});


app.listen(port,()=>
{
    console.log(`server is runnin at port ${port}  Tihis will only print on terminal`);//for CONSOLE console.log()
}) 
 