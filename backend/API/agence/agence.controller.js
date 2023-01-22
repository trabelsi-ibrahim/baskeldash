
const{ createagence,getagenceById,getagence,updateagence,deleteagence}=require("./agence.service");




module.exports={
    createagence:(req,res)=>
    {
        const body=req.body;
        //const  salt=genSaltSync(20);
        //body.password = hashSync(body.password,salt);
        createagence(body,(err,results)=>{
        if(err)
        { 
            console.log(err);
            return res.status(500).json(
                {
                    success:0,
                    message:"dataBase connection error"
                }
            );
        }
        return res.status(200).json(
            { 
                success:1,
                data:results
            }
        )


        })

    },



    getagence:(req,res)=>{
        getagence((err,results)=>
        {
                if(err)
                {
                    console.log(err);
                    return;
                }
                
                return res.status(200).json({
                    succes :1 ,
                    message : results
                })
                        });
                
                
                    },

     updateagence:(req,res)=>{
        const body=req.body;
        
        updateagence(body,(err,results)=>
        {
         if(err)
       {
         console.log(err);
         return;
       }
       if(!results)
       {
       return res.json({
        success:0,
        message:"failed update"});
       }
       return res.json({
     success:1,
     data:"updated successfully"
      });
        });
 
 
     },
    
     deleteagence:(req,res)=>{
        const data = req.body;
        deleteagence(data,(err,results)=>
        {
 if(err)
 {
     console.log(err);
     return;
 }
 if(!results)
 {
    return res.json({
 success:0,
 message:"Record not found"}); 
 }
 return res.json({
     success:1,
     data:"agence deleted succesfully"
 });
        });
 
 
     },  
    
 
 
  


}