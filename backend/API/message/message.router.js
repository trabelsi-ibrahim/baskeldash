const {CreateMessage,deleteMessage,getMessage,updateMessage}=require("./message.controller");
const router = require("express").Router();

router.post("/createMes",CreateMessage);
router.get("/getMes",getMessage);
router.patch("/updateMes",updateMessage);
router.delete("/deleteMes",deleteMessage);
module.exports=router;