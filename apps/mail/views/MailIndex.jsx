import { mailService } from '../../mail/services/mail.service.js'
import { SidebarMail } from '../cmps/SidebarMail.jsx'
import { AppHeaderMail } from '../cmps/AppHeaderMail.jsx'

const { useState, useEffect } = React
const { Outlet } = ReactRouterDOM

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [unreadMails, setUnreadMails] = useState(null)
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

    useEffect(() => {
        mailService.query(mailService.getDefaultFilter())
            .then(mails => {
                setUnreadMails(mails.filter(mail => mail.isRead === false && mail.from !== mailService.getUserMail()).length)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    function onRemoveMail(ev, mailId) {
        if (ev !== null) {
            ev.stopPropagation()
        }
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
        if (mail.from !== mailService.getUserMail()) {
            if (isRead) setUnreadMails(prevUnreadMails => prevUnreadMails + 1)
            else {
                setUnreadMails(prevUnreadMails => prevUnreadMails - 1)
            }
        }
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
        console.log(mail)
        mailService.save(mail)
            .then(() => {
                console.log('hi')
            })
            .catch(err => {
                console.error(err)
            })
    }

    function onSetFilterBy(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    function setFilterSent() {
        setFilterBy(prevFilter => ({ ...prevFilter, status: sent }))
    }

    if (!mails) return <div>Loading...</div>
    return (
        <section className="mail-index">
            <AppHeaderMail
                filterBy={filterBy}
                onSetFilterBy={onSetFilterBy} />
            <div className="flex">
                <SidebarMail
                    unreadMails={unreadMails}
                    setFilterSent={setFilterSent}
                    onSetFilterBy={onSetFilterBy}
                    filterBy={filterBy} />
                <Outlet context={[mails, onComposeMail, onRemoveMail, setUnreadOrRead, filterBy, onSetFilterBy]} />
            </div>
        </section >
    )
}

