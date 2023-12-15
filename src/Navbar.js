const Navbar = () => {  //SFC = Stateless Functional Component
    return ( 
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
     );
}
 
export default Navbar;