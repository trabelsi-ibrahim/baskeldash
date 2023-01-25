import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

function Newu  ({title})  {
  const [file, setFile] = useState("");
  const [data,setData]= useState({
    email:"",
    cin:"",
    nom:"",
    prenom:"",
    image:"",
    tel:"",
    adresse:""

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
    const reqUrl = "http://localhost:3010/client/createCl";
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
                  <label>Cin</label>
                  <input type="text" placeholder="00864574" 
                  id="cin"
                  value={(data.cin)}
                  onChange={(e)=>handle(e)}/>
                </div>


                <div className="formInput" key="1">
                  <label>Nom</label>
                  <input type="text" placeholder="ali" 
                  id="nom"
                  value={(data.nom)}
                  onChange={(e)=>handle(e)}/>
                </div>


                <div className="formInput" >
                  <label>Prenom</label>
                  <input type="text" placeholder="Ben saleh"
                  id="prenom"
                  value={(data.prenom)}
                  onChange={(e)=>handle(e)} />
                </div>



                <div className="formInput" >
                  <label>E-mail</label>
                  <input type="mail" placeholder="ali-bensale@gmail.com"
                  id="email"
                  value={(data.email)}
                  onChange={(e)=>handle(e)}/>
                </div>




                <div className="formInput" >
                  <label>Numero telephone</label>
                  <input type="tel" placeholder="25 478 124"  
                  id="tel"
                  value={(data.tel)}
                  onChange={(e)=>handle(e)}/>
                </div>



                <div className="formInput" >
                  <label>Address</label>
                  <input type="text" placeholder="Monastir R6"
                  id="adresse"
                  value={(data.adresse)}
                  onChange={(e)=>handle(e)} />
                </div>
              
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newu;
