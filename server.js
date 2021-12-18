const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const {registerValidation} = require("./controllers/validation")
const mongoose = require("mongoose");
// const { MONGO_URI } = require("./config");
// const dotenv = require('dotenv');
// dotenv.config();


// Routes
const userRoutes = require("./routes/api/routes")

const port = process.env.PORT || 5000;


//use body-parser
app.use(bodyParser.urlencoded({ extended: false }));


//json bodyParser
app.use(bodyParser.json());


//set static folder
app.use(express.static(path.join(__dirname, "build")))

app.get("/", (req, res) => {
    res.send(path.join(__dirname, "build", "index.html"))
})




const MONGO_URI = "mongodb+srv://mongotut:testing123@cluster0.kogqa.mongodb.net/react-login-DB?retryWrites=true&w=majority"
// const MONGO_URI = "mongodb://localhost:27017/react-login-DB"


//connect to mongodb
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connected to MongoDB"))
.catch(err => console.log(err));



// use routes 
app.use("/api/route|/", userRoutes)




app.listen(port, () => console.log("sever is on 5000"));
