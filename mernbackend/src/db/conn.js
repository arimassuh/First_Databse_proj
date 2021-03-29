
//are wew creating database here?no we are connecting already availabe database to this file which is already on localhost:27017 from mongocompass

const mongoose = require("mongoose");//through mongoose, connections are made so its variable made

//first we opened mongodb copass and saw localhost number, then again we rechecked the localhost number in cmd "mongo"
mongoose.connect("mongodb://localhost:27017/youtubeRegistration",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>//this whole sigle connecting sentence ended here but how do  i know the server connected to the db or not?
{
    console.log(`connection sucessful`);//duh!
}).catch(()=>
{
    console.log("No connection made");//duh!                                                                                             
}) 