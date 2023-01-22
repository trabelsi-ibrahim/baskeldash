import "./evetable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { eventColumns, eventRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";

function Datatable() {
  
  
  
  
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function fetchEventList(){
      try{
        const reqUrl='http://localhost:3010/event/getEvent'
        const reponse = await fetch(reqUrl)
        const repJson = await reponse.json();
        console.log("rep",repJson);
        console.log(typeof(repJson))
        setData(repJson.data);
        console("le data: ",data);
      }catch{}
    }
    fetchEventList();},[]);
    







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
            <Link to={`/evenement/${params.row.id}`} style={{ textDecoration: "none" }} activeClassName="current">
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
        Add New evenment
        <Link to="/evenement/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={eventColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
