import { Link } from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div className="heading"> My Form App </div>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/create">Fill Form</Link>
                <Link to="/viewForm">View Form</Link>
                <Link to="/viewCart">View Cart</Link>
            </div>
        </div>
     );
}
 
export default Navbar;