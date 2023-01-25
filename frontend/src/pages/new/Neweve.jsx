import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

function Newe  ({title})  {
  const [file, setFile] = useState("");
  const [data,setData]= useState({
    id: "",
            id_organization: "",
            id_piste: "",
            date: "",
            heure: "",
            adresse: "",
            description: "",
            image: ""

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
    const reqUrl = "http://localhost:3010/event/createEvent";
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
                  <label>Id Club</label>
                  <input type="text" placeholder=""
                  id="id_organization"
                  value={(data.id_organization)}
                  onChange={(e)=>handle(e)}/>
                </div>


                <div className="formInput" key="1">
                  <label>Id evenement</label>
                  <input type="text" placeholder="" 
                  id="id"
                  value={(data.id)}
                  onChange={(e)=>handle(e)}/>
                </div>


                <div className="formInput" >
                  <label>Id piste</label>
                  <input type="text" placeholder=""
                  id="id_piste"
                  value={(data.id_piste)}
                  onChange={(e)=>handle(e)} />
                </div>


                <div className="formInput" >
                  <label>Date</label>
                  <input type="date" placeholder=""
                  id="date"
                  value={(data.date)}
                  onChange={(e)=>handle(e)}/>
                </div>


                <div className="formInput" >
                  <label>Heure</label>
                  <input type="time" placeholder=""  
                  id="heure"
                  value={(data.heure)}
                  onChange={(e)=>handle(e)}/>
                </div>


                <div className="formInput" >
                  <label>Address</label>
                  <input type="text" placeholder="Monastir R6"
                  id="adresse"
                  value={(data.adresse)}
                  onChange={(e)=>handle(e)} />
                </div>


                <div className="formInput" >
                  <label>Description</label>
                  <input type="text" placeholder="Description"
                  id="description"
                  value={(data.description)}
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

export default Newe;
