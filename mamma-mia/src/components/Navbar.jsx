const Navbar = () => {
    const total = 25000;
    const token = false;
 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="btn btn-outline-primary">🍕 Home</button>
                {token ? (
                    <>
                        <button className="btn btn-outline-success">🔓 Profile</button>
                        <button className="btn btn-outline-danger">🔒 Logout</button>
                    </>
                ) : (
                    <>
                        <button className="btn btn-outline-warning">🔐 Login</button>
                        <button className="btn btn-outline-info">🔐 Register</button>
                    </>
                )}
                <button className="btn btn-outline-dark">
                    🛒 Total: ${total.toLocaleString()}
                </button>
            </div>
        </nav>
    );
 };
 
 export default Navbar;
 