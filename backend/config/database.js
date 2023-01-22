const {createPool} =require("mysql");

const pool =createPool({
    host: "localhost",
    user:"root",
    password :"",
    database :"baskel_nouv",
    port : 3306,

});
module.exports=pool;