const pool = require("../../config/database");
const{ createevenement,getevenementById,getevenement,updateevenement,deleteevenement}=require("./evenement.service");


//const{ genSaltSync,hashSync }=require("bcrypt");

module.exports={
    createevenement:(req,res)=>
    {
        const body=req.body;
       
        createevenement(body,(err,results)=>{
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

getevenementById:(req,res)=>{
       const id =req.params.id ;
       getevenementById(id ,(err,results)=>
       {
if(err)
{
    console.log(err);
    return;
}
//if(!results)
//{
//   return res.json({
//success:0,
//message:"Record not found"}); 
//}
return res.json({
    success:1,
    data:results
});
       });


    },


    getevenement:(req,res)=>{
        getevenement((err,results)=>
        {
 if(err)
 {
     console.log(err);
     return;
 }
  
 return res.json({
     success:1,
     data:results
 });
        });
 
 
     },

     updateevenement:(req,res)=>{
        const body=req.body;
        
        updateevenement(body,(err,results)=>
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
    
     deleteevenement:(req,res)=>{
        const data = req.body;
        deleteevenement(data,(err,results)=>
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
     data:"evenement deleted succesfully"
 });
        });
 
 
     },  
    
 
 
  


}