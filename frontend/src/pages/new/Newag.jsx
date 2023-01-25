import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

function Newa ({  title }) {
  const [file, setFile] = useState("");
  const [data,setData]= useState({
    id_agence:"",
    nom:"",
    adresse:"",
    description:"",
    photo:"",
    email:"",
    website:"",


  })



function handle(e){
  const newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)
  console.log(newdata)
}


const submit = async (e)=>{
  e.preventDefault(); 
  try {
    const reqUrl = "http://localhost:3010/agence/createAg";
    const response = await fetch(reqUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result); // this will print the response from the server
    if (result.success === 1) {
     
    if (result.data.success === 0) {
      alert(result.data.message);
      
    }}
  } catch (error) {
    console.error(error);
  }
};
  
   // this will print the response from the server
   


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
                  <input type="text" placeholder="bike rent"
                  id="id_agence"
                  value={(data.id_agence)}
                  onChange={(e)=>handle(e)}/>
                </div>
                <div className="formInput" >
                  <label>Nom d'agence</label>
                  <input type="text" placeholder="bike rent"
                  id="nom"
                  value={(data.nom)}
                  onChange={(e)=>handle(e)}/>
                </div>


                <div className="formInput" key="1">
                  <label>Adresse</label>
                  <input type="text" placeholder="Monastir falez"
                  id="adresse"
                  value={(data.adresse)}
                  onChange={(e)=>handle(e)} />
                </div>


                <div className="formInput" >
                  <label>E-mail</label>
                  <input type="email" placeholder="bike_rent@gmail.com"
                  id="email"
                  value={(data.email)}
                  onChange={(e)=>handle(e)} />
                </div>

               


                <div className="formInput" >
                  <label>Site web</label>
                  <input type="text" placeholder="bike_rent.com" 
                  id="website"
                  value={(data.website)}
                  onChange={(e)=>handle(e)}/>
                </div>



                <div className="formInput" key="1">
                  <label>Description</label>
                  <input type="text" placeholder="Description" aria-required
                  id="description"
                  value={(data.description)}
                  onChange={(e)=>handle(e)}/>
                </div>
              
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newa;
