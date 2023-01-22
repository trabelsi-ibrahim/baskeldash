const {createCl,deleteCl,updateCl,getCl} = require("./client.service");

module.exports={
    
    CreateClient:(req,res)=>{
        const body =req.body;
        createCl(body,(err,result)=>{
            if (err ){
                console.log(err);
                return res.status(500).json({
                    succes :0,
                    message: "database connection error insert client "
                });
            }
            if(result.length>0){
                return res.status(500).json({
                    succes :1,
                    message: "database connection error insert client "
            })}
            
            
            return res.status(200).json({
                succes :1 ,
                message : result
            })
        })
    },
    /////////////////////////////////////////
    getClient:(req,res)=>{
        getCl((err,result)=>{
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
    //////////////////////////////////////////
   /* getClientId:(req,res)=>{
        getClId((err,result)=>{
            if (err ){
                console.log(err);
                return ;
            }
            return res.status(200).json({
                succes :1 ,
                message : result
            })

        })
    },*/
    ////////////////////////////////////////
    updateClient:(req,res)=>{
        const body =req.body;
        updateCl(body,(err,result)=>{
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
    deleteClient:(req,res)=>{
        const data = req.body;
        deleteCl(data,(err,result)=>{
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