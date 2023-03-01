const express = require("express");
const router = express.Router();

router.get("/", (req,res, next) => {
 res.status(200).json({
    message:"successful get",
metadata:{
    hostname: req.hostname,
    method: req.method
}})
});

router.get("/:id", (req,res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message:"successful get by ID",
        id,
        metadata:{
            hostname: req.hostname,
            method: req.method
        }
    })
});



module.exports = router;