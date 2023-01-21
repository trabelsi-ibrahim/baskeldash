import "./clubtable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { clubColumns, clubRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Clubtable = () => {
  const [data, setData] = useState(clubRows);

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
