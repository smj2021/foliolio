import './navbar.css';
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
  return (
    <nav>
      {/* Using HashLink we are able to create scrollable links that don't function with the standard Link component https://www.npmjs.com/package/react-router-hash-link */}
      <HashLink className="title" smooth to="#top"></HashLink>
    </nav>

  )
}

export default NavBar;