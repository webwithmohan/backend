import express from "express"
import cors from "cors"
import fs from "fs"
import { json } from "stream/consumers"
import "dotenv/config"

// import mysql2 from "mysql2"
// import mongoose from "mongoose"
// import randomOtp from "./random.mjs"

const app = express()
app.use(cors())

//Database Connection
// const db = mysql2.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "7989",
//     database: "users"
// })
// db.connect((err) => {
//     if (err) {
//         console.log("Database Connection Failed");

//     } else {
//         console.log("Database Connection Success");
//       }

// })

//Routing
app.get("/", async(req, res) => {
    fs.readFile('data.json',"utf-8",(err,data) => {
        if(err){
            return res.status(500).json({error: "Cannaot read json file"})
        }
        const users=JSON.parse(data);
        res.json(users)
    })
   
    

    
}) 
// app.get("/otp", (req, res) => {
//     res.json(
//         {
//             phone:"8566464646",
//             otp:randomOtp()
//         }
//     )
// })
app.listen(process.env.PORT, () => {
    console.log("Server Ruuning http://127.0.0.1:5000/");

})
