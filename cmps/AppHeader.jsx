const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
    return <header className="app-header">
        <div className="flex align-center">
            <div className='logo-container flex align-center'>
                <Link to="/">
                    <div>AppSus</div>
                </Link>
            </div>
        </div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail/list">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
