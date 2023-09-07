const { Link, NavLink } = ReactRouterDOM

export function SidebarMail({ unreadMails }) {
    return (
        <section className="SidebarMail">
            <Link className='compose-btn grid flow-col align-center' to={'/mail/list/new'}>
                <span className="material-symbols-outlined">
                    edit
                </span>
                <span>Compose</span>
            </Link>
            <nav>
                <NavLink className='flex space-between inbox-btn' to={'/mail/list'}><span>Inbox</span> <span className='unread-mails'>{unreadMails}</span></NavLink>
            </nav>
        </section>
    )
}