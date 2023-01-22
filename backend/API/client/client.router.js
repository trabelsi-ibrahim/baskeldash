const {CreateClient,deleteClient,getClient,updateClient}=require("./client.controller");
const router = require("express").Router();

router.post("/createCl",
    
  CreateClient);

router.get("/getCl",getClient);
router.patch("/updateCl",updateClient);
router.delete("/deleteCl",deleteClient);
module.exports=router;