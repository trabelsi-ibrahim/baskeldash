const {CreatePiste,deletePiste,getPiste,updatePiste}=require("./pistecycl.controller");
const router = require("express").Router();

router.post("/createPis",CreatePiste);
router.get("/getPis",getPiste);
router.patch("/updatePis",updatePiste);
router.delete("/deletePis",deletePiste);
module.exports=router;