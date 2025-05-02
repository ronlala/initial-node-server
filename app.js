//initialize express environment
const express = require("express");
//allow the app to use the express package
const app = express();
//define a port number for the server to listen for a connection. 
const PORT = 3000;
//initialize and retain an index route to automatically render a message when the server starts
// app.get("/", (request,response,next) => {
//     response.send("Hello World!")
// });

app.get("admin",(req,res,next) =>{
    res.send("This is the admin route that points to admin conssole page");
});
app.get("/authors", (req,res,next) =>{
    res.send("This route points to  the Author Page")
});

app.get("/books,",(req,res,next) =>{
    res.send("This route Points to books")
});
app.get("/site-routes",(req,res,next)=>{
    res.send("This route points to the site router page")
});
//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen(PORT, () =>{
    console.log(`Server is listening on ${PORT}, Connection Established.`)
});