const express = require("express")

const app = express()
require("dotenv").config()
const cors = require('cors')

const PORT = process.env.PORT

//database connection
// connectDatabase(process.env.MONGO_URI)

// routes here
const authRoutes = require("./routes/auth/authRoutes")
const reportRoute = require("./routes/reports/reportRoutes")
const adminRoute = require("./routes/admin/adminRoutes")
const { connectDatabase } = require("./database/database")

app.use(express.json())
app.use(express.urlencoded({extended : true}))


connectDatabase(process.env.MONGO_URI)


app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Home Page"
    })
})

app.use(cors({
    origin : '*'
}))


app.use("/api", authRoutes)
app.use("/api",reportRoute)
app.use("/api",adminRoute)



app.listen(PORT,()=>{
    console.log("NodeJs has started at PORT " + PORT )
})