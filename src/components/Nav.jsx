import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
        <div>
            <nav style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                <Link className="link" to="/">HOME</Link>
                <Link className="link" to="/blue">BLUE</Link>
                <Link className="link" to="/red">RED</Link>
                <Link className="link" to="/green">GREEN</Link>
                <Link className="link" to="/mystery">MYSTERY</Link>
            </nav>
        </div>
        </>
     );
}
 
export default Nav;

{/* <nav className="navBar"></nav> */}