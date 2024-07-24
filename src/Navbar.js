
import { Link } from 'react-router-dom';

const Navbar = () => {
    let Home ="https://www.google.com";
    return ( 
        <nav className="navbar">
            <h1>The Buduwa Blogs</h1>
            <Link to="/">HOME</Link>
            <Link to="/create"> NEW BLOGS</Link>
        </nav>
     );

}
 
export default Navbar;