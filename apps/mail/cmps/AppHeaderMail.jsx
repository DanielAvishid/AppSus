import { MailFilter } from '../cmps/MailFilter.jsx'

const { Link, NavLink } = ReactRouterDOM

export function AppHeaderMail({ filterBy, onSetFilterBy, setIsSidebarOpen, isSidebarOpen }) {
    return <header className="app-header-mail">
        <div className="flex align-center">
            <div className='logo-container flex align-center'>
                <span
                    className="material-symbols-outlined menu"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    menu
                </span>
                <Link to="/">
                    <img className='logo' src="/assets/img/gmail-logo.png" alt="" />
                </Link>
                <span className='logo-title'>Mails</span>
            </div>
            <MailFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
        </div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail/list">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
