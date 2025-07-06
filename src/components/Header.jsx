import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
          <Link to="about"><li>about</li></Link>
         <Link to="search"><li>search</li></Link>
         <Link to="login"><li>login</li></Link>
          </ul>
        </nav>
      </header>
      <hr />
    </div>
  );
}

export default Header;
