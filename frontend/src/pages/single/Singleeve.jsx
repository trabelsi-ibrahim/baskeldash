import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { eventRows } from '../../datatablesource';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Singlee = () => {
  const { id } = useParams();
  console.log(id);
  const idNumber = Number(id);
console.log(idNumber);
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function fetchEventList(){
      try{
        const reqUrl='http://localhost:3010/event/getEvent/${idNumber}'
        const reponse = await fetch(reqUrl)
        const repJson = await reponse.json();
        console.log("rep",repJson);
        console.log(typeof(repJson))
        setData(repJson.data);
        console.log("le data: ",data);
      }catch{}
    }
    fetchEventList();},[]);
    
 
  useEffect(() => {
    const fetchUser = async () => {
      console.log(eventRows.map(user => user.id));
      console.log(eventRows);
      const userData = eventRows.find(({ id: dataId }) => dataId === idNumber);
      if (userData) {
        console.log(`Found item:`, userData);
        setUser(userData);
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
                src={user.img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.nom}</h1>
                <div className="detailItem">
                  <span className="itemKey">Id evenement:</span>
                  <span className="itemValue">{user.id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Id club:</span>
                  <span className="itemValue">{user.id_organisation}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Id piste:</span>
                  <span className="itemValue">{user.id_piste}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date:</span>
                  <span className="itemValue">{user.date}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Heure:</span>
                  <span className="itemValue">{user.heure}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adresse:</span>
                  <span className="itemValue">{user.adresse}</span>
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

export default Singlee;
