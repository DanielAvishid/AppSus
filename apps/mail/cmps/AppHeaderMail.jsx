const { Link, NavLink } = ReactRouterDOM

export function AppHeaderMail() {

    return <header className="app-header">
        <div className="flex">
            <button>=</button>
            <Link to="/">
                <h3>LOGO!</h3>
            </Link>
        </div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
