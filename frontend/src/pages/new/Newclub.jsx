
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

function Newc  ({title})  {
  const [file, setFile] = useState("");
  const [data,setData]= useState({
    id :"",
    nom:"",
    description:"",
    adresse:"",
    photo:""

  })



function handle(e){
  const newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)
  console.log(newdata)
}


function submit(e){
  e.preventDefault(); 
  fetch("http://localhost:3005/API/organization",{
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
                  <label>id de club</label>
                  <input type="text" placeholder="club de velo" value={(data.id)}
                onChange={(e)=>handle(e)}/>
                </div>
              <div className="formInput" >
                  <label>Nom de club</label>
                  <input type="text" placeholder="club de velo" value={(data.nom)}
                onChange={(e)=>handle(e)}/>
                </div>
                <div className="formInput" >
                  <label>Nom de club</label>
                  <input type="text" placeholder="club de velo" value={(data.nom)}
                onChange={(e)=>handle(e)}/>
                </div>
                <div className="formInput" key="1">
                  <label>Description</label>
                  <input type="text" placeholder="Description" value={(data.id.description)}
                onChange={(e)=>handle(e)}/>
                </div>
                <div className="formInput" >
                  <label>Adresse</label>
                  <input type="text" placeholder="Monastir R6" value={(data.id.adresse)}
                onChange={(e)=>handle(e)}/>
                </div>
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newc;