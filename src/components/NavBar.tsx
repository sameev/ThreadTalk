import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-logo-link" to="/">
          //TODO: Add a home image
          <img
            id="logo"
            className="nav-logo"
            src=""
            alt="logo"
          />
        </Link>
      </nav>
    </>
  )
}

export default NavBar