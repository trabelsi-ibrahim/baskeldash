import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { clubRows } from '../../datatablesource';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Singlec = () => {
  const { id } = useParams();
  console.log(id);
  const idNumber = Number(id);
console.log(idNumber);
  const [user, setUser] = useState({});

  const fetchData = async (id) => {
    try {
      const reqUrl = `http://localhost:3010/organization/${id}`;
      const response = await fetch(reqUrl);
      const data = await response.json();
      setUser(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(user);
  useEffect(() => {
    fetchData(id);
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
                src="https://cdn-icons-png.flaticon.com/512/4629/4629699.png"
                //{user.photo}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.nom}</h1>
                <div className="detailItem">
                  <span className="itemKey">Id club:</span>
                  <span className="itemValue">{user.id}</span>
                </div>
                
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
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

export default Singlec;
