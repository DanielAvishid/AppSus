const { Fragment } = React

export function MailPreview({ mail }) {
    return <Fragment>
        <td className="preview-from">
            {mail.from}
        </td>
        <td className="preview-content">
            <span className="preview-subject">
                {mail.subject}
            </span>
            <span className="preview-body">
                {mail.body}
            </span>
        </td>
        <td className="preview-sent-at">
            {mail.sentAt}
        </td>
    </Fragment>
}
