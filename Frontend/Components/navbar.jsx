import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
    <nav>
        <Link to="/Home">Home</Link> &nbsp;
        <Link to="/about">About Us</Link> &nbsp;
        <Link to="/contact">Contact Us</Link>
    </nav>
    )
}