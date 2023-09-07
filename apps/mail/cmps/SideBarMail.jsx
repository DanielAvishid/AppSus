const { Link, NavLink } = ReactRouterDOM

export function SidebarMail({ unreadMails }) {
    return (
        <section className="SidebarMail">
            <Link className='compose-btn flex align-center justify-center' to={'/mail/inbox/new'}>
                <span className="material-symbols-outlined">
                    edit
                </span>
                <span className='compose-title'>Compose</span>
            </Link>
            <nav>
                <NavLink to={'/mail/inbox'} className='flex space-between inbox-btn'>
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">inbox</span>
                        <span>Inbox</span>
                    </div>
                    <span className='unread-mails'>{unreadMails}</span>
                </NavLink>
                <NavLink to={'/'} className='flex starred-btn'>
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">star</span>
                        <span>Starred</span>
                    </div>
                </NavLink>
                <NavLink to={'/'} className='flex sent-btn'>
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">send</span>
                        <span>Sent</span>
                    </div>
                </NavLink>
                <NavLink to={'/'} className='flex drafts-btn'>
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">note</span>
                        <span>Drafts</span>
                    </div>
                </NavLink>
                <NavLink to={'/'} className='flex trash-btn'>
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">delete</span>
                        <span>Trash</span>
                    </div>
                </NavLink>
            </nav>
        </section>
    )
}