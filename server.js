import express from "express";
import "dotenv/config.js"

const server = express();

const PORT = process.env.PORT || 8080

const ready = () => console.log(`Server ready in port: ${PORT}`);

server.get('/', (req,res) => 
    {res.send('Hola mundo en express...!')}
)

server.listen(PORT,ready);

console.log(process.env.PORT);
