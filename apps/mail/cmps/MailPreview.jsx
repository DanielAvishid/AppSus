const { useState } = React

export function MailPreview({ mail, readOrUnread, onMailClick, hoverOrNot, onRemoveMail, setUnreadOrRead, setIsStar, StarOrNot }) {
    const [isHover, setIsHover] = useState(false)
    const [isStarred, setIsStarred] = useState(mail.isStarred)

    return <tr className={`tr-container ${hoverOrNot(isHover)} ${readOrUnread(mail.isRead)}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={(ev) => {
            if (!mail.isRead) {
                setUnreadOrRead(ev, mail, mail.isRead)
            }
            onMailClick(mail.id)
        }}>
        <td className={'preview-star'}>
            {isStarred && <span
                className={'fa-solid fa-star'}
                onClick={(ev) => {
                    setIsStar(ev, mail, isStarred)
                    setIsStarred(!isStarred)
                }}>
            </span>}
            {!isStarred && <span
                className={`material-symbols-outlined`}
                onClick={(ev) => {
                    setIsStar(ev, mail, isStarred)
                    setIsStarred(!isStarred)
                }}>
                star
            </span>}
        </td>
        <td className="preview-from">
            {mail.from}
        </td>
        <td className="preview-subject">
            <span>
                {`${mail.subject} - `}
            </span>
            <span className='preview-body'>
                {mail.body}
            </span>
        </td>
        {!isHover && <td className="preview-sent-at">
            {mail.sentAt}
        </td>
        }
        {isHover && <td className="preview-tools flex justify-end align-center">
            <span title="Delete" className="material-symbols-outlined" onClick={(ev) => onRemoveMail(ev, mail.id, mail.isRead)}>
                delete
            </span>
            {!mail.isRead && <span title="Mark as read" className="material-symbols-outlined" onClick={(ev) => setUnreadOrRead(ev, mail, mail.isRead)}>
                drafts
            </span>}
            {mail.isRead && <span title="Mark as unread" className="material-symbols-outlined" onClick={(ev) => setUnreadOrRead(ev, mail, mail.isRead)}>
                mail
            </span>}
        </td>
        }
    </tr >
}
