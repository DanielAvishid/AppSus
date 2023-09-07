import { mailService } from '../../mail/services/mail.service.js'
import { SidebarMail } from '../cmps/SidebarMail.jsx'
import { AppHeaderMail } from '../cmps/AppHeaderMail.jsx'

const { useState, useEffect } = React
const { Outlet } = ReactRouterDOM

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

    useEffect(() => {
        mailService.query(filterBy)
            .then(mails => {
                setMails(mails)
            })
            .catch(err => {
                console.error(err)
            })
    }, [filterBy])

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

    function setUnreadOrRead(ev, mail, isRead) {
        ev.stopPropagation()
        mail.isRead = !isRead
        const mailId = mail.id
        mailService.save(mail)
            .then(updatedMail => {
                setMails(prevMails => {
                    const prevMailIdx = prevMails.findIndex(mail => mail.id === mailId)
                    prevMails.splice(prevMailIdx, 1, updatedMail)
                    return [...prevMails]
                })
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
        return mails.filter(mail => mail.isRead === false).length
    }

    function onSetFilterBy(value) {
        console.log(value)
        setFilterBy(prevFilter => ({ ...prevFilter, isRead: value }))
    }

    if (!mails) return <div>Loading...</div>
    return (
        <section className="mail-index">
            <AppHeaderMail />
            <div className="flex">
                <SidebarMail unreadMails={getUnreadMails()} />
                <Outlet context={[mails, onComposeMail, onRemoveMail, setUnreadOrRead, filterBy, onSetFilterBy]} />
            </div>
        </section >
    )
}

