const{  createagence,getagence,updateagence,deleteagence}= require("./agence.controller");
const router = require("express").Router();

router.post("/createAg" ,createagence);
router.patch("/updateAg",updateagence);

router.get("/getAg",getagence);



router.delete("/deleteAg",deleteagence)

module.exports=router;