
const express = require("express")
const route = require("./route/route.js")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://prakashurkude:prakash1998@cluster0.nuhssqs.mongodb.net/Backend-Engineer-Test", { useNewUrlParser: true })
    .then(() => console.log("Mongoose is connected"))
    .catch((err) => console.log(err.massage))

app.use("/", route)

app.listen(3000, () => console.log("express is runing on Port 3000"))