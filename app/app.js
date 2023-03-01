const express = require("express");
const router = require("../router/router");
const app = express();

//Middleware used to convert json payloads into our request model
app.use(express.json());

//Service actuator which tests if the service is up
app.get("/", (req, res) => {
    res.status(200).json({message: "service is up"});
});

app.use("/exercise", router);

app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500).json({
        error: {
            message:error.message,
            status:error.status
        }
    });
});

module.exports = app;