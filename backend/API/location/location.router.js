const {CreateLocation,deleteLocation,getLocation,updateLocation}=require("./location.controller");
const router = require("express").Router();

router.post("/createLoc",CreateLocation);
router.get("/getLoc",getLocation);
router.patch("/updateLoc",updateLocation);
router.delete("/deleteLoc",deleteLocation);
module.exports=router;