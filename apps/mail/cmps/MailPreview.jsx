const { useState } = React

export function MailPreview({ mail, readOrUnread, onMailClick, hoverOrNot, onRemoveMail, setUnreadOrRead }) {
    const [isHover, setIsHover] = useState(false)

    return <tr className={`tr-container ${hoverOrNot(isHover)} ${readOrUnread(mail.isRead)}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={(ev) => {
            if (!mail.isRead) {
                setUnreadOrRead(ev, mail, mail.isRead)
            }
            onMailClick(mail.id)
        }}>
        <td className="preview-star">
            <span className="material-symbols-outlined">
                star
            </span>
        </td>
        <td className="preview-from">
            {mail.from}
        </td>
        <td className="preview-content">
            <span className="preview-subject">
                {mail.subject}
            </span>
            <span className="between-span">-</span>
            <span className="preview-body">
                {(mail.body.length <= 90 && mail.body) ||
                    (mail.body.substring(0, 90) + ' ...')}
            </span>
        </td>
        {!isHover && <td className="preview-sent-at">
            {mail.sentAt}
        </td>}
        {isHover && <td className="preview-tools flex justify-end align-center">
            <span title="Delete" className="material-symbols-outlined" onClick={(ev) => onRemoveMail(ev, mail.id)}>
                delete
            </span>
            {!mail.isRead && <span title="Mark as read" className="material-symbols-outlined" onClick={(ev) => setUnreadOrRead(ev, mail, mail.isRead)}>
                drafts
            </span>}
            {mail.isRead && <span title="Mark as unread" className="material-symbols-outlined" onClick={(ev) => setUnreadOrRead(ev, mail, mail.isRead)}>
                mail
            </span>}
        </td>}
    </tr>
}
