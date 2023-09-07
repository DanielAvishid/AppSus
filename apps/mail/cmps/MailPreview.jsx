const { useState } = React

export function MailPreview({ mail, readOrUnread, onMailClick, hoverOrNot, onRemoveMail }) {
    const [isHover, setIsHover] = useState(false)

    return <tr className={`tr-container ${hoverOrNot(isHover)} ${readOrUnread(mail.isRead)}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => onMailClick(mail.id)}>
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
        {isHover && <td className="preview-tools flex justify-end">
            <span className="material-symbols-outlined" onClick={() => onRemoveMail(mail.id)}>
                delete
            </span>
            <span class="material-symbols-outlined">
                mail
            </span>
        </td>}
    </tr>
}
