const { Fragment } = React

export function MailPreview({ mail, onMailClick }) {
    return <Fragment>
        <td>
            <button>Star</button>
        </td>
        <td className="preview-from" onClick={() => onMailClick(mail.id)}>
            {mail.from}
        </td>
        <td className="preview-content" onClick={() => onMailClick(mail.id)}>
            <span className="preview-subject">
                {mail.subject}
            </span>
            <span className="preview-body" onClick={() => onMailClick(mail.id)}>
                {mail.body}
            </span>
        </td>
        <td className="preview-sent-at" onClick={() => onMailClick(mail.id)}>
            {mail.sentAt}
        </td>
    </Fragment>
}
