const { Link, NavLink } = ReactRouterDOM

export function MenuModal() {
    return (
        <section className='menu-modal'>
            <div className='modal-container flex align-center space-between'>
                <Link to="/mail/list">
                    <img className='logo' src="./././img/gmail-logo.png" alt="" />
                </Link>
                <Link to="/note">
                    <img className="logo" src="./././img/Google_Keep_logo.png" alt="" />
                </Link>
            </div>
        </section>
    )
}