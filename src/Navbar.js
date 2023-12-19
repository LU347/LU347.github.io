const Navbar = () => {  //SFC = Stateless Functional Component
    return ( 
        <nav className="navbar">
            <h1 class="site-title">E Lucile Ong</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
            </div>
        </nav>
     );
}
 
export default Navbar;