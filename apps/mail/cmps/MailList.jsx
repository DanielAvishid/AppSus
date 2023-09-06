import { MailPreview } from './MailPreview.jsx'

const { useNavigate } = ReactRouterDOM
const { Link } = ReactRouterDOM

export function MailList({ mails }) {
    const navigate = useNavigate()

    function onMailClick(mailId) {
        navigate(`/mail/${mailId}`)
    }

    function readOrUnread(isRead) {
        if (isRead) return 'read'
        if (!isRead) return 'non-read'
    }

    return (
        <table className="mail-list">
            <tbody>
                {mails.map(mail => (
                    <tr key={mail.id} className={readOrUnread(mail.isRead)}>
                        <MailPreview mail={mail} onMailClick={onMailClick} />
                    </tr>
                ))}
            </tbody>
        </table>

    )
}
