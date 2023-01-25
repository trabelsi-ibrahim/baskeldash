import "./agencetable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { agencyRows, agencyColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";

function Datatable() {
  
  
  
  
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function fetchAgList(){
      try{
        const reqUrl='http://localhost:3010/agence/getAg'
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
          const reqUrl = `http://localhost:3010/agence/${id}`;
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
            <Link to={`/agence/${params.row.id_agence}`} style={{ textDecoration: "none" }} activeClassName="current">
           <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id_agence)}
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
        Add New Agency
        <Link to="/agence/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={agencyColumns.concat(actionColumn)}
        getRowId={(row) => row?.id_agence}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
