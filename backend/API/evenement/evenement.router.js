const{  createevenement,getevenementById,getevenement,updateevenement,deleteevenement}= require("./evenement.controller");
const router = require("express").Router();
//insertion des donner
router.post("/createEvent" ,createevenement);
//obtenir les donner de la base de donner

router.get("/getEvent",getevenement);
//obtenir les donner selon les id
router.get("/:id ",getevenementById);
//modification de donner de base de donner
router.patch("/updateEvent",updateevenement)
//supprimer les donner 
router.delete("/deleteEvent",deleteevenement)

module.exports=router;