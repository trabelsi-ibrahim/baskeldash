const {CreateVehicule,deleteVehicule,getVehicule,updateVehicule}=require("./vehicule.controller");
const router = require("express").Router();

router.post("/createVeh",CreateVehicule);
router.get("/getVeh",getVehicule);
router.patch("/updateVeh",updateVehicule);
router.delete("/deleteVeh",deleteVehicule);
module.exports=router;