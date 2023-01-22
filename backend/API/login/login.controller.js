const {verifLog} = require("./login.service");

module.exports={
    
    loginVerf:(req,res)=>{
        const body =req.body;
        verifLog(body,(err,result)=>{
            if (err ){
                console.log(err);
                return res.status(500).json({
                    succes :0,
                    message: "database connection error verification "
                });
            }
            if(result.length>0){console.log("welcome !");}
                //res.redirect("/")} // ici lapi en cas reussit login 


            else {//res.redirect("/api/login")
            console.log("failed login")}

            
            return res.status(200).json({
                succes :1 ,
                message : result
            })
        })
    },}