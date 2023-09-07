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

  function hoverOrNot(isHover) {
    if (isHover) return 'hovered'
    if (!isHover) return 'non-hovered'
  }

  return (
    <section className="mail-list">
      <Outlet context={onComposeMail} />
      <section>
        <select name="" id="">
          <option value="all">All</option>
          <option value="read">Read</option>
          <option value="un-read">Unread</option>
        </select>
      </section>
      <table className="mail-table">
        <tbody>
          {mails.map(mail => (
            <MailPreview
              key={mail.id}
              mail={mail}
              readOrUnread={readOrUnread}
              onMailClick={onMailClick}
              hoverOrNot={hoverOrNot}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}
