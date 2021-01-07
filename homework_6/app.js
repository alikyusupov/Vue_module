const path = require("path");

const http = require("http");

const express = require("express");

const app = express();

const server = http.createServer(app);

const port = process.env.PORT||3000;

app.use(express.static("public"));

app.use(function(req, res, next){
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(port,()=>{
	console.log("Server is running...")
})

