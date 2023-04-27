import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <>
      <nav className='nav-bar'>
        <Link className='nav-logo-link' to='/'>
          <FontAwesomeIcon 
            id='logo'
            className='nav-logo'
            icon={faHouse}
            size='2x'
          />
        </Link>

        <ul className="nav-right-list">
          <li className="nav-message-board-list-item">
            <Link to='/1' className='nav-message-board-link'>
              message board
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
