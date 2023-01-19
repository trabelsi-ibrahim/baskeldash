import "./club.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Clubtable from "../../components/clubtable/Clubtable"

const Club = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Clubtable/>
      </div>
    </div>
  )
}

export default Club