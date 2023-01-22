const {createO,deleteOrg,updateOrg,getOrg} = require("./organization.service");

module.exports={
    CreateOrganization:(req,res)=>{
        const body =req.body;
        createO(body,(err,result)=>{
            if (err ){
                console.log(err);
                return res.status(500).json({
                    succes :0,
                    message: "database connection error insert "
                });
            }
            return res.status(200).json({
                succes :1 ,
                message : result
            })
        })
    },
    /////////////////////////////////////////
    getOrganization:(req,res)=>{
        getOrg((err,result)=>{
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
    updateOrganization:(req,res)=>{
        const body =req.body;
        updateOrg(body,(err,result)=>{
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
    deleteOrganiation:(req,res)=>{
        const data = req.body;
        deleteOrg(data,(err,result)=>{
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
