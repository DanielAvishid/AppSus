import { MailPreview } from './MailPreview.jsx'

const { useNavigate } = ReactRouterDOM
const { Outlet, useOutletContext } = ReactRouterDOM

export function MailList() {
    const [mails, onComposeMail, onRemoveMail, setUnreadOrRead, filterBy, onSetFilterBy] = useOutletContext()
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

    function handleChange({ target }) {
        let value = target.value
        onSetFilterBy(value)
    }

    return (
        <section className="mail-list">
            <Outlet context={onComposeMail} />
            <section>
                <select onChange={handleChange}>
                    <option value="">All</option>
                    <option value={true}>Read</option>
                    <option value={false}>Unread</option>
                </select>
            </section>
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
                        />
                    ))}
                </tbody>
            </table>
        </section>

    )
}
