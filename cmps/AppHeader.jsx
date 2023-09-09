import { MenuModal } from '../../../cmps/MenuModal.jsx'

const { Link, NavLink } = ReactRouterDOM
const { useState } = React

export function AppHeader() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return <header className="app-header">
        <div className="flex align-center">
            <div className='logo-container flex align-center'>
                <Link to="/">
                    <h3>AppSus</h3>
                </Link>
            </div>
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
                <img src={"./././img/dog-1.jpg"} alt="" />
            </button>
            {isMenuOpen && <MenuModal />}
        </nav>
    </header>
}
