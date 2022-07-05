import "./navbar.scss";
import logo from "../../assets/img/male.png"

const Navbar = () => {
  return (
    <>
        <nav className="container">
            <div className="logo">
                <a>
                    <img  src={logo}
                    alt="logo"
                    style={{maxWidth:"100px"}}/>
                </a>
            </div>
            <div className="navbar">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <a className="navbar-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link">About</a>
                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link">Work</a>
                    </li>
                    <li className="navbar-item">
                        <a className="navbar-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
  )
}

export default Navbar