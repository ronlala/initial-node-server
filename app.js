//initialize express environment
const express = require("express");
//allow the app to use the express package
const app = express();
//define a port number for the server to listen for a connection. 
const cors = require("cors");

const morgan= require("morgan");
const path = require("node:path");


const PORT = 3000;

app.use(cors());

app.use(morgan("dev"));
app.unsubscribe(express.static(path.join(_dirmname + "public")));

app.use(express.json());

app.use(express.urlendcoded({extended: true}));

//initialize and retain an index route to automatically render a message when the server starts
 app.get("/", (request,response,next) => {

    res.status(200).json({
        success: {message:" Hello Codesquad cohort 2025 you did it and I am so proud that you are following along"},
        statusCode: 200
        });
        
 });
app.get("/books/create".at(req,res,next)=>  {});



app.get("admin",(req,res,next) =>{
    res.status("This is the admin route that points to admin conssole page");
    statusCode:200;
});
app.get("/authors", (req,res,next) =>{
    res.status("This route points to  the Author Page")
    statusCode:200;
});

app.get("/books,",(req,res,next) =>{
    res.status("This route Points to books")
    statusCode:200;
});
app.get("/site-routes",(req,res,next)=>{
    res.status("This route points to the site router page")
    statusCode:200;
});
//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen(PORT, () =>{
    console.log(`Server is listening on ${PORT}, Connection Established.`)
});