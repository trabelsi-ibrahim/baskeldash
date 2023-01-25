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
  
    const fetchData = async (id) => {
      try {
        const reqUrl = `http://localhost:3010/event/getEvent/${id}`;
        const response = await fetch(reqUrl);
        const data = await response.json();
        setUser(data.message);
      } catch (error) {
        console.error(error);
      }
    };
    console.log(user);
    useEffect(() => {
      fetchData(id);
    }, [id]);
    
  console.log(user.id)

  
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
                src="https://cdn-icons-png.flaticon.com/512/9353/9353711.png"
                //{user.img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle"></h1>
                <div className="detailItem">
                  <span className="itemKey">Id evenement:</span>
                  <span className="itemValue">{user.id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Id club:</span>
                  <span className="itemValue">{user.id_organization}</span>
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
          </div>
      </div>
    </div>
  );
};

export default Singlee;
