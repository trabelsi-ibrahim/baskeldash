import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { agencyRows } from '../../datatablesource';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Singlel = () => {
  const { email } = useParams();
  console.log(email);
  const [ag, setAg] = useState({});
  const [user, setUser] = useState({});

  const fetchData = async (id) => {
    try {
      const reqUrl = `http://localhost:3010/location/${id}`;
      const response = await fetch(reqUrl);
      const data = await response.json();
      setUser(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(user);
  useEffect(() => {
    fetchData(email);
  }, [email]);
  
  const [id, setId] = useState(user.id_agence);

  const fetchData2 = async (id) => {
    try {
      const reqUrl = `http://localhost:3010/agence/getAg/${id}`;
      const response = await fetch(reqUrl);
      const data = await response.json();
      setAg(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(ag);
  useEffect(() => {
    if(user.id_agence)
    fetchData2(user.id_agence);
  }, [user.id_agence]);
  console.log(ag)
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3595/3595835.png" 
                //{user.photo}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle"></h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">{user.email}</span>
                </div>
                
                <div className="detailItem">
                  <span className="itemKey">Id velo: </span>
                  <span className="itemValue">{user.id_vehicule}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Id agence: </span>
                  <span className="itemValue">{user.id_agence}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Nom d'agence: </span>
                  <span className="itemValue">{ag.nom}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date: </span>
                  <span className="itemValue">{user.date}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Periode: </span>
                  <span className="itemValue">{user.periode} jour(s)</span>
                </div>
              </div>
            </div> 
          </div>
          </div>
      </div>
    </div>
  );
};

export default Singlel;
