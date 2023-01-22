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
const List = () => {
 // state for the data
const [locationData,setLocationData] = useState(locationRows)
const [useData,setUserData] = useState(useRows)
const [agenceData,setAgenceData] = useState(agencyRows)
console.log(useData)
//id de l'utulisateur
const { id } = useParams();
const idNumber = Number(id);
const [user, setUser] = useState({});
const [user2, setUser2] = useState([]);

// useEffect hook to fetch user data based on id
useEffect(() => {
const fetchUser = async () => {
const userData = useData.find(({ id: dataId }) => dataId === idNumber);
if (userData) {
setUser(userData.cin);
} else {
console.log("No user found with id: ", id );
}
};
fetchUser();
}, [id]);

// useEffect hook to fetch location data based on user cin
useEffect(() => {
const fetchUser2 = async () => {
const userData2 = locationData.filter(({ cin: dataId }) => dataId === user);
if (userData2.length > 0) {
setUser2(userData2) 

} else {
console.log("No location found with cin: " , user);
}
};
fetchUser2();
}, [user]);
const getAgencyName = (id) => {
  const agency = agencyRows.find(agency => agency.id === Number(id));
  return agency ? agency.nom : "Agency not found";
}
console.log(user2)
const updatedUser2 = user2.map(user => {
  const agencyName = getAgencyName(user.id_agence)
  console.log(agencyName)
})
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Id velo</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
</TableBody>
</Table>
</TableContainer>
);
};

export default List;
