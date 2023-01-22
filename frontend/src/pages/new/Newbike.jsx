
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

function Newv  ({title})  {
  const [file, setFile] = useState("");
  const [data,setData]= useState({
    id_agence :"",
    id:"",
    type:"",
    marque:"",
    type:"",
    nom:"",
    description:"",
    prix:"",
    couleur:"",
    rate:"",
    speed:"",
    

  })
  
function handle(e){
  const newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)
  console.log(newdata)
}


function submit(e){
  e.preventDefault(); 
  fetch("http://localhost:3005/API/vehicule",{
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
                  <label>Id agence</label>
                  <input type="text" placeholder=""  maxLength={8} value={(data.id_agence)}
                onChange={(e)=>handle(e)}/>
                </div>
                <div className="formInput" key="1">
                  <label>Id velo</label>
                  <input type="text" placeholder="" maxLength={8} value={(data.id)}
                onChange={(e)=>handle(e)}/>
                </div>
                <div className="formInput" >
                  <label>Type</label>
                  <input type="text" placeholder="bike/scooter" value={(data.type)}
                onChange={(e)=>handle(e)}/>
                </div>
                <div className="formInput" >
                  <label>Marque</label>
                  <input type="text"placeholder="" value={(data.marque)}
                onChange={(e)=>handle(e)}/>
                </div>
                <div className="formInput" >
                  <label>Nom</label>
                  <input type="text" placeholder=""  value={(data.nom)}
                onChange={(e)=>handle(e)}/>
                </div>
                <div className="formInput" >
                  <label>Prix</label>
                  <input type="number" placeholder="20 TND" value={(data.prix)}
                onChange={(e)=>handle(e)}/>
                </div>
                <div className="formInput" >
                  <label>Couleur</label>
                  <input type="text" placeholder="noir" value={(data.couleur)}
                onChange={(e)=>handle(e)}/>
                </div>
                <div className="formInput" >
                  <label>Rate</label>
                  <input type="number" placeholder="0.00" min={0.00} max={10.00} step={0.1} value={(data.rate)}
                onChange={(e)=>handle(e)}/>
                </div>
                <div className="formInput" >
                  <label>Vitesse</label>
                  <input type="number" placeholder="20.00" step={0.1} value={(data.speed)}
                onChange={(e)=>handle(e)}/>

                </div>
                <div className="formInput" >
                  <label>Description</label>
                  <input type="text" placeholder="Description"  value={(data.description)}
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

export default Newv;