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

    function onRemoveMail(mailId) {
        mailService.remove(mailId)
            .then(() => {
                setMails(prevMails => prevMails.filter(mail => mail.id !== mailId))
            })
            .catch(err => {
                console.error(err)
            })
    }

    function onComposeMail(newMail) {
        mailService.save(newMail)
            .then(() => {
                console.log()
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

