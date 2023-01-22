const {createPis,deletePis,updatePis,getPis} = require("./pisteCycl.service");

module.exports={
    CreatePiste:(req,res)=>{
        const body =req.body;
        createPis(body,(err,result)=>{
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
    getPiste:(req,res)=>{
        getPis((err,result)=>{
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
    updatePiste:(req,res)=>{
        const body =req.body;
        updatePis(body,(err,result)=>{
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
    deletePiste:(req,res)=>{
        const data = req.body;
        deletePis(data,(err,result)=>{
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
