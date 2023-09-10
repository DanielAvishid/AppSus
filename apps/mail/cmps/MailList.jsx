import { MailPreview } from 'MailPreview.jsx'
import { MailSort } from 'MailSort.jsx'

const { useNavigate } = ReactRouterDOM
const { Outlet, useOutletContext } = ReactRouterDOM

export function MailList() {
    const [mails, onComposeMail, onRemoveMail, setUnreadOrRead, , , sortBy, onSetSortBy, setIsStar] = useOutletContext()
    const navigate = useNavigate()

    function onMailClick(mailId) {
        navigate(`/mail/${mailId}`)
    }

    function readOrUnread(isRead) {
        if (isRead) return 'read'
        if (!isRead) return 'non-read'
    }

    function hoverOrNot(isHover) {
        if (isHover) return 'hovered'
        if (!isHover) return 'non-hovered'
    }

    function StarOrNot(isStarred) {
        if (isStarred) return 'starred'
        if (!isStarred) return 'non-starred'
    }

    return (
        <section className="mail-list">
            <Outlet context={onComposeMail} />
            <MailSort onSetSortBy={onSetSortBy} sortBy={sortBy} />
            <table className="mail-table">
                <tbody>
                    {mails.map(mail => (
                        <MailPreview key={mail.id}
                            mail={mail}
                            readOrUnread={readOrUnread}
                            onMailClick={onMailClick}
                            hoverOrNot={hoverOrNot}
                            onRemoveMail={onRemoveMail}
                            setUnreadOrRead={setUnreadOrRead}
                            setIsStar={setIsStar}
                            StarOrNot={StarOrNot} />
                    ))}
                </tbody>
            </table>
        </section>

    )
}
