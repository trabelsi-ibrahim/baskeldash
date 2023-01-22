import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useRows } from '../../datatablesource';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Singleu = () => {
const { id } = useParams();
console.log(id);
const idNumber = Number(id);
console.log(idNumber);

const [user, setUser] = useState({});
const [data2, setData2] = useState([]);
const [data, setData] = useState([]);

useEffect(()=>{
  async function fetchUserList(){
  try{
  const reqUrl='http://localhost:3002/organization/getOrg'
  const reponse = await fetch(reqUrl)
  const repJson = await reponse.json();
  console.log(repJson);
  setData2(repJson.message);
  
  }catch{}
  }
  fetchUserList();},[]);
  console.log(' org: ',data2);
  



useEffect(()=>{
async function fetchUserList(){
try{
const reqUrl='http://localhost:3002/client/getCl'
const reponse = await fetch(reqUrl)
const repJson = await reponse.json();
console.log(repJson);
setData(repJson.message);

}catch{}
}
fetchUserList();},[]);
console.log('client',data);

const getClientbyId = (id) => {
  
  const client = data.find(client => client.id === Number(id));
  console.log(client)
  return client ? client : "Agency not found";
}
console.log(user)
//setUser(getClientbyId(idNumber));





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
          <h1 className="itemTitle">{user.nom} {user.prenom}</h1>
            <div className="detailItem">
            <span className="itemKey">Cin:</span>
<span className="itemValue">{user.cin}</span>
            </div>
            
            <div className="detailItem">
            <span className="itemKey">Email:</span>
          <span className="itemValue">{user.email}</span>
            </div>
            
            <div className="detailItem">
            <span className="itemKey">Telephone:</span>
          <span className="itemValue">{user.tel}</span>
            </div>
            <div className="detailItem">
            <span className="itemKey">Address:</span>
              <span className="itemValue">{user.adresse}</span>
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

export default Singleu;
