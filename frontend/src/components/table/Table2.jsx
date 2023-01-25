import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState ,useEffect} from "react";
import { locationRows,useRows,agencyRows } from "../../datatablesource";
import { useParams } from "react-router-dom";
const List = ({email}) => {
// state for the data
const { id } = useParams();
  console.log(id);

const [user, setUser] = useState({});
const [user2, setUser2] = useState([]);
const [user3, setUser3] = useState([]);
const fetchData2 = async (id) => {
  try {
    const reqUrl = `http://localhost:3010/location/agence/${id}`;
    const response = await fetch(reqUrl);
    const data = await response.json();
    setUser2(data.data);
  } catch (error) {
    console.error(error);
  }
};
console.log(user2);
useEffect(() => {
  fetchData2(id);
}, [id]);

const fetchData = async (id) => {
  try {
    const reqUrl = `http://localhost:3010/location/${id}`;
    const response = await fetch(reqUrl);
    const data = await response.json();
    setUser(data.data);
  } catch (error) {
    console.error(error);
  }
};
console.log(user);
useEffect(() => {
  fetchData(user2.email);
}, [user2.email]);


return (
<TableContainer component={Paper} className="table">
<Table sx={{ minWidth: 650 }} aria-label="simple table">
<TableHead>
<TableRow>
<TableCell className="tableCell">Id velo</TableCell>
<TableCell className="tableCell">Marque</TableCell>
<TableCell className="tableCell">Customer cin</TableCell>
<TableCell className="tableCell">Customer</TableCell>
<TableCell className="tableCell">Date</TableCell>
<TableCell className="tableCell">Amount</TableCell>


</TableRow>
</TableHead>
<TableBody>
{user2.map((row) => (
<TableRow key={row.id}>
<TableCell component="th" scope="row">
{row.id_vehicule}
</TableCell>
<TableCell>{row.marque}</TableCell>
<TableCell>{row.email}</TableCell>
<TableCell>{row.nom}{row.prenom}</TableCell>
<TableCell>{row.prix*row.periode}</TableCell>
<TableCell>{row.prix}</TableCell>

</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
);
};

export default List;