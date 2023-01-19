import "./velo.scss"
import Sidebar from "../../components/sidebar2/Sidebar2"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/velotable/Velotable"

const Velo2 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default Velo2