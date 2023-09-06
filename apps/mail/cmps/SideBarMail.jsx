const { Link } = ReactRouterDOM

export function SidebarMail({ unreadMails }) {
    return (
        <section className="SidebarMail">
            <Link to={'/mail/list/new'}>Compose</Link>
            <div>
                <Link to={`/mail/list`}>Inbox {unreadMails}</Link>
            </div>
        </section>
    )
}