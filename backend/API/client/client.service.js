const pool = require("../../config/database");


module.exports={
    createCl:(data,callback)=>{ //le data est le body passeer du front 
        const sqlInsert="INSERT INTO client (id ,cin,email,nom,prenom,image,tel,adresse) VALUES (?,?,?,?,?,?,?,?);";
        pool.query(sqlInsert,
        [data.id,
        data.cin,
        data.email,
        data.nom,
        data.prenom,
        data.image,
        data.tel,
        data.adresse
        ],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        })
    },


    ///////////////////////////////////////////

    getCl:callback=>{
        pool.query("SELECT * FROM client",
        [],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }


        )
    },
    //////////////////////////////////////////////////
    
    updateCl:(data,callback)=>{
        pool.query("UPDATE client SET nom= ? WHERE cin= ?",
        [data.nom,
        data.cin
        ],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }
        )
    },


    ////////////////////////////////////////////////
    
    //suppose delete by cin 
    deleteCl:(data,callback)=>{
        pool.query("delete from client where cin=?",
        [data.cin
        ],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }

        )
    }


}