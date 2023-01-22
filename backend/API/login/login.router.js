const {loginVerf}=require("./login.controller");
const router = require("express").Router();

router.post("/sign-in",loginVerf);
module.exports=router;