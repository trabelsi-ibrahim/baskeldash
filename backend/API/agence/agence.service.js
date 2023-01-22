module.exports={

//insertion des elements dans la base de donné
    createagence:(data,callBack)=>
    {
        pool.query(

            "insert into agence(nom,adresse,description,photo,email,website,telephone)values(?,?,?,?,?,?,?)",[data.nom,data.adresse,data.description,data.photo,data.email,data.website,data.telephone,],(error,results,fields)=>
            {
                if(error)
                {
                    return callBack(error)
                }
                return callBack(null,results)
            }

        );
    },

//obtention des donner de la base de donné
getagence:callBack=>
{
    pool.query(
"select * from agence ",[],(erreur,results,fields)=>
{
    if(erreur)
    {
       return callBack(erreur);

    }
    return callBack(null,results);
}
    );
},

//modification de titre selon l'id
updateagence:(data,callBack)=>
{
    pool.query
    (" UPDATE agence SET adresse=?,description=?,photo=?,email=?,website=? WHERE  nom=?",
    [data.adresse,data.description,data.photo,data.email,data.website,data.nom ],
       
        (erreur,results,fields)=>
        {
            if(erreur)
            {
               return callBack(erreur);
        
            }
            return callBack(null,results);
        }
            );
    
},
deleteagence:(data,callBack)=>{
    pool.query
    (
        'delete from agence where nom=?',[data.nom],(error,results,fields)=>
        {
            if(error)
            {
                return callBack(error);
            }
            return callBack(null,results[0]);
        }
    )
    

},
}
const pool=require("../../config/database");
module.exports={

//insertion des elements dans la base de donné
    createagence:(data,callBack)=>
    {
        pool.query(

            "insert into agence(id,nom,adresse,description,photo,email,website,telephone)values(?,?,?,?,?,?,?,?)",[data.id,data.nom,data.adresse,data.description,data.photo,data.email,data.website,data.telephone],(error,results,fields)=>
            {
                if(error)
                {
                    return callBack(error)
                }
                return callBack(null,results)
            }

        );
    },

//obtention des donner de la base de donné
getagence:callBack=>
{
    pool.query(
"select * from agence ",[],(erreur,results,fields)=>
{
    if(erreur)
    {
       return callBack(erreur);

    }
    return callBack(null,results);
}
    );
},

//modification de titre selon l'id
updateagence:(data,callBack)=>
{
    pool.query
    (" UPDATE agence SET adresse=?,description=?,photo=?,email=?,website=? WHERE  nom=?",
    [data.adresse,data.description,data.photo,data.email,data.website,data.nom ],
       
        (erreur,results,fields)=>
        {
            if(erreur)
            {
               return callBack(erreur);
        
            }
            return callBack(null,results);
        }
            );
    
},
deleteagence:(data,callBack)=>{
    pool.query
    (
        'delete from agence where nom=?',[data.nom],(error,results,fields)=>
        {
            if(error)
            {
                return callBack(error);
            }
            return callBack(null,results[0]);
        }
    )
    

},
}
