import "./list.scss"
import Sidebar from "../../components/sidebar2/Sidebar2"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable2/Datatable2"

const List2 = () => {
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

export default List2