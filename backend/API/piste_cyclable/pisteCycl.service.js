const pool = require("../../config/database");



module.exports={
    createPis:(data,callback)=>{
        const sqlInsert="INSERT INTO piste_cyclable (id,nom,ville,description) VALUES (?,?,?,?);";
        pool.query(sqlInsert,
        [
        data.id,
        data.nom,
        data.ville,
        data.description
        ],(error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        })
    },


    ///////////////////////////////////////////

    getPis:callback=>{
        pool.query("SELECT * FROM piste_cyclable",
        [],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }


        )
    },

    ///////////////////////////////////////////
    //suppose update nom by id
    updatePis:(data,callback)=>{
        pool.query("UPDATE piste_cyclable SET nom= ? WHERE id= ?",
        [data.nom,
        data.id],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }
        )
    },


    ////////////////////////////////////////////////
                                    //!!!!!!!!!!!!!!! PAS SUUUUUUUUUUUUR !!!!!!!!!!!!!!
    //suppose delete by id 
    deletePis:(data,callback)=>{
        pool.query("delete from piste_cyclable where id=?",
        [data.id],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }

        )
    }


}