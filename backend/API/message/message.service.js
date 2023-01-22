const pool = require("../../config/database");


module.exports={
    createM:(data,callback)=>{
        const sqlInsert="INSERT INTO message (id_forum,id_client,date,heure,content) VALUES (?,?,?,?,?);";
        pool.query(sqlInsert,
        [
        data.id_forum,
        data.id_client,
        data.date,
        data.heure,
        data.content
        
        ],(error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        })
    },



    ///////////////////////////////////////////
    

    getMes:callback=>{
        pool.query("SELECT * FROM message",
        [],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }


        )
    },

    ///////////////////////////////////////////
    //suppose update heure by id_forum
    updateMes:(data,callback)=>{
        pool.query("UPDATE message SET heure= ? WHERE id_forum= ?",
        [data.heure,
        data.id_forum],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }
        )
    },


    ////////////////////////////////////////////////
                                        //!!!!!!!!!!!!!!! PAS SUUUUUUUUUUUUR !!!!!!!!!!!!!!
    //suppose delete by id_forum 
    deleteMes:(data,callback)=>{
        pool.query("delete from message where id_forum=?",
        [data.id_forum],
        (error,result,fields)=>{
            if(error){
                return callback(error); }
            return callback(null,result);
        }

        )
    }


}