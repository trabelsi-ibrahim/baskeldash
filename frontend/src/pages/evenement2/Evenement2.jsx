import "./evenemnt.scss"
import Sidebar from "../../components/sidebar2/Sidebar2"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/evetable/Evetable"


const Evenement2 = () => {
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

export default Evenement2