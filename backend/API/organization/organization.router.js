const {CreateOrganization,deleteOrganiation,getOrganization,updateOrganization}=require("./organization.controller");
const router = require("express").Router();

router.post("/createOrg",CreateOrganization);
router.get("/getOrg",getOrganization);
router.patch("/updateOrg",updateOrganization);
router.delete("/deleteOrg",deleteOrganiation);
module.exports=router;