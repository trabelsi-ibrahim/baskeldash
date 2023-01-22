import { Link } from "react-router-dom"
import Login from "../../components/login_signup/login"
import './main2.css'
import { Route,Routes } from "react-router-dom"
import SignUp from "../../components/login_signup/signup"
const Main = () => {
    return (
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/login'}>
              BASKEL
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
          </div>
          
          
    )
  }
  
  export default Main