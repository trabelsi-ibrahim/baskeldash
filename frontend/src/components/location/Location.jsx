
import "./pistetable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { pisteRows, pisteColumns,locationColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Datatable = () => {
  //const [data, setData] = useState(pisteRows);
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function fetchAgList(){
      try{
        const reqUrl='http://localhost:3010/location/getLoc'
        const reponse = await fetch(reqUrl)
        const repJson = await reponse.json();
        console.log("rep",repJson);
        console.log(typeof(repJson))
        setData(repJson.message);
        console("le data: ",data);
      }catch{}
    }
    fetchAgList();},[]);
    
  

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/location/${params.row.email}`} style={{ textDecoration: "none" }} activeClassName="current">
           <div className="viewButton">View</div>
            </Link>
           
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Liste de location
        
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={locationColumns.concat(actionColumn)}
        getRowId={(row) => row?.email}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;