export function SideBarMail({ unreadMails }) {

    return (
        <section className="side-bar-mail">
            <button>Compose</button>
            <div>
                <button>Inbox {unreadMails}</button>
                <button>Starred</button>
                <button>Sent</button>
            </div>
        </section>
    )
}