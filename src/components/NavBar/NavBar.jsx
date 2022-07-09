import './navbar.css';
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
  return (
    <nav>
      {/* Using HashLink we are able to create scrollable links that don't function with the standard Link component https://www.npmjs.com/package/react-router-hash-link */}
      <HashLink className="title" smooth to="#top">Michael</HashLink>
      <div>
        <HashLink smooth to="#about">About Me</HashLink>
        <HashLink smooth to="#skills">Languages &amp; Technologies</HashLink>
        <HashLink smooth to="#projects">Projects</HashLink>
        <HashLink smooth to="#contact">Contact Me</HashLink>
      </div>
    </nav>
  )
}

export default NavBar;