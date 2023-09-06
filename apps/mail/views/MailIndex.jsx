import { mailService } from '../../mail/services/mail.service.js'
import { MailList } from '../cmps/MailList.jsx'
import { SideBarMail } from '../cmps/SideBarMail.jsx'
import { AppHeaderMail } from '../cmps/AppHeaderMail.jsx'

const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState(null)

    useEffect(() => {
        mailService.query()
            .then(setMails)
            .catch(err => {
                console.error(err)
            })
    }, [])

    function getUnreadMails() {
        return mails.filter(mail => mail.isRead === false).length
    }

    if (!mails) return <div>Loading...</div>
    return (
        <section className="mail-index">
            <AppHeaderMail />
            <div className="flex">
                <SideBarMail unreadMails={getUnreadMails()} />
                <MailList mails={mails} />
            </div>
        </section>
    )
}

