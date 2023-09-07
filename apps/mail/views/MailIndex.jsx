import { mailService } from '../../mail/services/mail.service.js'
import { SidebarMail } from '../cmps/SidebarMail.jsx'
import { AppHeaderMail } from '../cmps/AppHeaderMail.jsx'

const { useState, useEffect } = React
const { Outlet } = ReactRouterDOM

export function MailIndex() {
    const [mails, setMails] = useState(null)

    useEffect(() => {
        mailService.query()
            .then(mails => {
                setMails(mails)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    function onRemoveMail(ev, mailId) {
        ev.stopPropagation()
        mailService.remove(mailId)
            .then(() => {
                setMails(prevMails => prevMails.filter(mail => mail.id !== mailId))
            })
            .catch(err => {
                console.error(err)
            })
    }

    function onComposeMail(mail) {
        mailService.save(mail)
            .then(newMail => {
                setMails(prevMails => [...prevMails, newMail])
            })
            .catch(err => {
                console.error(err)
            })
    }

    function getUnreadMails() {
        return mails.length
    }

    if (!mails) return <div>Loading...</div>
    return (
        <section className="mail-index">
            <AppHeaderMail />
            <div className="flex">
                <SidebarMail unreadMails={getUnreadMails()} />
                <Outlet context={[mails, onComposeMail, onRemoveMail]} />
            </div>
        </section >
    )
}

