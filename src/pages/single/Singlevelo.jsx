import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { veloRows } from '../../datatablesource';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { agencyRows } from "../../datatablesource";
const Singlev = () => {
  const { id } = useParams();
  console.log(id);
  const idNumber = Number(id);
console.log(idNumber);
  const [user, setUser] = useState({});
  const [ag, setAg] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      console.log(veloRows.map(user => user.id));
      console.log(veloRows);
      const userData = veloRows.find(({ id: dataId }) => dataId === idNumber);
      if (userData) {
        console.log(`Found item:`, userData);
        setUser(userData);
      } else {
        console.log(`No item found with id: ${id}`);
      }
    };
    fetchUser();
  }, [id]);
  useEffect(() => {
    const fetchUser = async () => {
      console.log(agencyRows.map(ag => ag.id));
      console.log(agencyRows);
      const agData = agencyRows.find(({ id: dataId }) => dataId === user.idAgence);
      if (agData) {
        console.log(`Found item:`, agData);
        setAg(agData);
      } else {
        console.log(`No item found with id: ${id}`);
      }
    };
    fetchUser();
  }, [id]);
  
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
                src={user.image}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.nom}</h1>
                <div className="detailItem">
                  <span className="itemKey">Type:</span>
                  <span className="itemValue">{user.type}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Marque:</span>
                  <span className="itemValue">{user.marque}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Vitesse:</span>
                  <span className="itemValue">{user.speed}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Rate:</span>
                  <span className="itemValue">{user.rate}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Id velo:</span>
                  <span className="itemValue">{user.id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Id agence:</span>
                  <span className="itemValue">{user.id_agence}  <span className="itemKey">Nom  d'agence:</span>{ag.nom}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">{user.description}</span>
                </div>
              </div>
            </div> 
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List data={user.transactions}/>
        </div>
      </div>
    </div>
  );
};

export default Singlev;
