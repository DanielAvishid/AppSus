const { Link, NavLink } = ReactRouterDOM

export function AppHeaderMail() {

    return <header className="app-header-mail">
        <div className="flex align-center">
            <div className='flex'>
                <span className="material-symbols-outlined">
                    menu
                </span>
                <Link to="/">
                    <h3>LOGO!</h3>
                </Link>
            </div>
            <div className="main-search">
                <input type="text" placeholder='Search mail' />
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
