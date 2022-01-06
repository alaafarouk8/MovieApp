import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="d-flex shadow-lg rounded" style={{height:100 ,paddingLeft:100}}>
            <Link to="/" className="text-decoration-none" style={{padding:20}} >
                <div className="text-light fs-2">
                    Movies
                </div>
            </Link>
            <Link to="/favorites" className="text-decoration-none" style={{paddingRight:1000, paddingTop:20}}>
            <div className="text-light fs-2">
                    Favorites
                </div>
            </Link>
            <Link to="/signup" className="text-decoration-none" style={{paddingTop:20}}>
            <div className="text-light fs-2">
                    Sign Up
                </div>
            </Link>
            <Link to="/login" className="text-decoration-none" style={{padding:20}}>
            <div className="text-light fs-2">
                    Login
                </div>
            </Link>
        </div>
    );
}
export default NavBar; 