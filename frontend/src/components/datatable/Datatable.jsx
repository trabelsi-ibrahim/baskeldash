import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useColumns, useRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";

const Datatable = () => {
  
  //const [data, setData] = useState(useRows);
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function fetchUserList(){
      try{
        const reqUrl='http://localhost:3010/client/getCl'
        const reponse = await fetch(reqUrl)
        const repJson = await reponse.json();

console.log(repJson); 
//const dataArray = Object.entries(repJson).map(([id, value]) => ({ id, value }));
   // setData(dataArray);

        setData(repJson.message);
      }catch{}
    }
    fetchUserList();},[]);
   


    
console.log(data)

const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this item?")) {
    try {
      const reqUrl = `http://localhost:3010/client/${id}`;
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
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }} activeClassName="current">
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
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={useColumns.concat(actionColumn)}
        //getRowId={(row) => row?.cin}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
