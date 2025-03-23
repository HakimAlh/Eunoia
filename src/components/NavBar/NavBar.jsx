import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = ({ user, handleSignout }) => {
  return (
    <>
      { user ? (
        <nav className={styles.container}>
          Eunoia
          <ul>
            <li><Link to="/">Home</Link></li>
           <li> <button class="button"><Link to="/books/publish">Publish</Link></button></li>
            <li><Link to='/books'>Books</Link></li>
            <li><button id='signs'><Link to="" onClick={handleSignout}>Sign Out</Link></button></li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default NavBar;