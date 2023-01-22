const {createLoc,deleteLoc,updateLoc,getLoc} = require("./location.service");

module.exports={
    
    CreateLocation:(req,res)=>{
        const body =req.body;
        createLoc(body,(err,result)=>{
            if (err ){
                console.log(err);
                return res.status(500).json({
                    succes :0,
                    message: "database connection error insert "
                });
            }
            if(result.length>0){res.redirect("/apiEnCasDeSucces");}
            else {res.redirect("/");}
            
            return res.status(200).json({
                succes :1 ,
                message : result
            })
        })
    },
    /////////////////////////////////////////
    getLocation:(req,res)=>{
        getLoc((err,result)=>{
            if (err ){
                console.log(err);
                return ;
            }
            return res.status(200).json({
                succes :1 ,
                message : result
            })

        })
    },
    ////////////////////////////////////////
    updateLocation:(req,res)=>{
        const body =req.body;
        updateLoc(body,(err,result)=>{
            if (err ){
                console.log(err);
                return ;
                
            }
            return res.json({
                succes :1 ,
                message : "updated succeffully"
            });
        });
    },

    /////////////////////////////////////////
    deleteLocation:(req,res)=>{
        const data = req.body;
        deleteLoc(data,(err,result)=>{
            if (err ){
                console.log(err);
                return ;
                
            }
            if(!result){
                return res.json({
                    succes :0 ,
                    message : "record not found"
                });

            }
            return res.json({
                succes :1 ,
                message : "succeffully deleted record"
            });

        })
    }

}