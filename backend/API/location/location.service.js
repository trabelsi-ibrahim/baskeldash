const pool = require("../../config/database");



module.exports={
    createLoc:(data,callback)=>{ //le data est le body passeer du front 
        const sqlInsert="INSERT INTO location (cin,id_vehicule,id_agence,date,periode) VALUES (?,?,?,?,?);";
        pool.query(sqlInsert,
        [
        data.cin,
        data.id_vehicule,
        data.id_agence,
        data.date,
        data.periode
        ],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        })
    },


    ///////////////////////////////////////////

    getLoc:callback=>{
        pool.query("SELECT * FROM location",
        [],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }


        )
    },

    ///////////////////////////////////////////
    //suppose update id_vehicule by cin
    updateLoc:(data,callback)=>{
        pool.query("UPDATE location SET id_vehicule= ? WHERE cin= ?",
        [data.id_vehicule,
        data.cin],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }
        )
    },


    ////////////////////////////////////////////////
    
    //suppose delete by cin 
    deleteLoc:(data,callback)=>{
        pool.query("delete from location where cin=?",
        [data.cin],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }

        )
    }


}