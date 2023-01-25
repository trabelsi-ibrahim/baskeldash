
import "./clubtable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { clubColumns, clubRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Clubtable = () => {
  //const [data, setData] = useState(clubRows);
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function fetchAgList(){
      try{
        const reqUrl='http://localhost:3010/organization/getOrg'
        const reponse = await fetch(reqUrl)
        const repJson = await reponse.json();
        console.log("rep",repJson);
        console.log(typeof(repJson))
        setData(repJson.message);
        console("le data: ",data);
      }catch{}
    }
    fetchAgList();},[]);
    

    const handleDelete = async (id) => {
      if (window.confirm("Are you sure you want to delete this item?")) {
        try {
          const reqUrl = `http://localhost:3010/organization/${id}`;
          await fetch(reqUrl, { method: "DELETE" });
          setData(prevData => prevData.filter(item => item.id !== id));
        } catch (error) {
          console.error(error);
        }
      }
    };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/club/${params.row.id}`} style={{ textDecoration: "none" }} activeClassName="current">
           <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Club
        <Link to="/club/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={clubColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Clubtable;