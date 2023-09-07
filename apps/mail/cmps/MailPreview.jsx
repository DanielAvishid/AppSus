const { useState } = React

export function MailPreview({ mail, readOrUnread, onMailClick, hoverOrNot }) {
    const [isHover, setIsHover] = useState(false)

    return <tr className={`tr-container ${hoverOrNot(isHover)} ${readOrUnread(mail.isRead)}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => onMailClick(mail.id)}>
        <td className={"preview-from"}>
            {mail.from}
        </td>
        <td className="preview-content">
            <span className="preview-subject">
                {mail.subject}
            </span>
            <span className="between-span">-</span>
            <span className="preview-body">
                {mail.body}
            </span>
        </td>
        <td className="preview-sent-at">
            {mail.sentAt}
        </td>
    </tr>
}
