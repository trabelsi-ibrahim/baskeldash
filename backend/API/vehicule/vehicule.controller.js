const {create,deleteVeh,updateVeh,getVehic} = require("./vehicule.service");

module.exports={
    CreateVehicule:(req,res)=>{
        const body =req.body;
        create(body,(err,result)=>{
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
    getVehicule:(req,res)=>{
        getVehic((err,result)=>{
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
    updateVehicule:(req,res)=>{
        const body =req.body;
        updateVeh(body,(err,result)=>{
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
    deleteVehicule:(req,res)=>{
        const data = req.body;
        deleteVeh(data,(err,result)=>{
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
