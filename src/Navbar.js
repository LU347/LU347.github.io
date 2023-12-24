const Navbar = () => {  //SFC = Stateless Functional Component
    return ( 
        //TODO: Change to router
        <nav className="navbar">
            <h1 class="site-title">Elisha Lucile Ong</h1>
            <ul class="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;