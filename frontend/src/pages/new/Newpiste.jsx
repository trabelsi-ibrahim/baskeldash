import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

function Newp  ({title})  {
  const [file, setFile] = useState("");
  const [data,setData]= useState({
    id :"",
    nom:"",
    ville:"",
    description:""

  })



function handle(e){
  const newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)
  console.log(newdata)
}


function submit(e){
  e.preventDefault(); 
  fetch("http://localhost:3005/API/piste_cyclable",{
    method:"POST",
    CrossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept : "application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify(
     data
    ),

  }).then((res)=>res.json())
  .then((data)=>{console.log("le data : ",data);});
}




return (
  <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form onSubmit={(e)=>submit(e)}>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

            <div className="formInput" >
                <label>id de piste</label>
                <input type="text" placeholder="piste de falez" id="id"  value={(data.id)}
                onChange={(e)=>handle(e)}/>
              </div>
            
              <div className="formInput" >
                <label>Nom de piste</label>
                <input type="text" placeholder="piste de falez" id="nom"  value={(data.nom)}
                onChange={(e)=>handle(e)}/>
              </div>
              <div className="formInput" key="1">
                <label>Description</label>
                <input type="text" placeholder="Description" id="description"  value={(data.description)}
                onChange={(e)=>handle(e)}/>
              </div>
              <div className="formInput" >
                <label>Ville</label>
                <input type="text" placeholder="Monastir/Sousse" id="ville" value={(data.ville)}
                onChange={(e)=>handle(e)} />
              </div>
            
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
};

export default Newp;