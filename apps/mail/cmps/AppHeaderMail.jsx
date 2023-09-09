import { MailFilter } from '../cmps/MailFilter.jsx'
import { MenuModal } from '../../../cmps/MenuModal.jsx'

const { Link, NavLink } = ReactRouterDOM
const { useState } = React

export function AppHeaderMail({ filterBy, onSetFilterBy, setIsSidebarOpen, isSidebarOpen }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return <header className="app-header-mail">
        <div className="container flex align-center">
            <div className='logo-container flex align-center'>
                <span
                    className="material-symbols-outlined menu"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    menu
                </span>
                <Link to="/">
                    <img className='logo' src="./././img/gmail-logo.png" alt="" />
                </Link>
                <span className="brand-name">Mails</span>
            </div>
            <MailFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
        </div>
        <nav className="flex">
            <div className='nav-container flex align-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <button
                className="flex align-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="material-symbols-outlined">apps</span>
            </button>
            <button className="flex align-center justify-center relative">
                <img src="./././img/dog-1.jpg" alt="" />
            </button>
            {isMenuOpen && <MenuModal />}
        </nav>
    </header>
}
