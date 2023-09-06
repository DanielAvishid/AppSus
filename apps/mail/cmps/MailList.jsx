import { MailPreview } from './MailPreview.jsx'

const { useNavigate } = ReactRouterDOM
const { Outlet, useOutletContext } = ReactRouterDOM

export function MailList() {
    const [mails, onComposeMail, onRemoveMail] = useOutletContext()
    const navigate = useNavigate()

    function onMailClick(mailId) {
        navigate(`/mail/${mailId}`)
    }

    function readOrUnread(isRead) {
        if (isRead) return 'read'
        if (!isRead) return 'non-read'
    }

    return (
        <section className="mail-list">
            <Outlet context={onComposeMail} />
            <table className="mail-table">
                <tbody>
                    {mails.map(mail => (
                        <tr key={mail.id} className={readOrUnread(mail.isRead)}>
                            <td>
                                <button>Star</button>
                            </td>
                            <MailPreview mail={mail} />
                            <td onClick={() => onRemoveMail(mail.id)}>
                                <button >Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

    )
}
