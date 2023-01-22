const pool = require("../../config/database");


module.exports={
    verifLog:(data,callback)=>{  
        const sqlInsert="SELECT * FROM authentification WHERE login= ? and password= ?";
        pool.query(sqlInsert,
        [
        data.login,
        data.password
        ],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            
            return callback(null,result);
        })
    },
}