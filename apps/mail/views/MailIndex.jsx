import { mailService } from '../services/mail.service.js'
import { SidebarMail } from '../cmps/SidebarMail.jsx'
import { AppHeaderMail } from '../cmps/AppHeaderMail.jsx'

const { useState, useEffect } = React
const { Outlet } = ReactRouterDOM

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [unreadMails, setUnreadMails] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isSidebarHover, setIsSidebarHover] = useState(false)
    const [sortBy, setSortBy] = useState(mailService.getDefaultSort())

    useEffect(() => {
        mailService.query(filterBy)
            .then(mails => {
                setMails(mails)
                if (unreadMails === null) setUnreadMails(mails.filter(mail => mail.isRead === false).length)
            })
            .catch(err => {
                console.error(err)
            })
    }, [filterBy])

    useEffect(() => {
        if (!mails) return
        if (sortBy.date) {
            const sorted = sortByDate()
            if (!sortBy.descendD) {
                setMails([...sorted])
            } else {
                sorted.reverse()
                setMails([...sorted])
            }
        } else if (sortBy.subject) {
            const sorted = sortBySubject()
            if (!sortBy.descendS) {
                setMails([...sorted])
            } else {
                sorted.reverse()
                setMails([...sorted])
            }
        }
    }, [sortBy])

    function sortBySubject() {
        return mails.sort((a, b) => a.subject.localeCompare(b.subject))
    }

    function sortByDate() {
        return mails.sort((a, b) => b.date - a.date)
    }

    function onRemoveMail(ev, mailId, isRead) {
        if (ev !== null) {
            ev.stopPropagation()
        }
        const mail = mailService.get(mailId)
        mailService.remove(mailId)
            .then(() => {
                if (mail.from !== mailService.getUserMail()) {
                    if (!isRead) setUnreadMails(prevUnreadMails => prevUnreadMails - 1)
                }
                setMails(prevMails => prevMails.filter(mail => mail.id !== mailId)
                )
            }
            )
            .catch(err => {
                console.error(err)
            })
    }

    function setIsRead(ev, mail, isRead) {
        ev.stopPropagation()
        const mailId = mail.id
        mailService.save(mail)
            .then(updatedMail => {
                setMails(prevMails => {
                    if (mail.from !== mailService.getUserMail()) {
                        if (isRead) setUnreadMails(prevUnreadMails => prevUnreadMails + 1)
                        else setUnreadMails(prevUnreadMails => prevUnreadMails - 1)
                    }
                    const prevMailIdx = prevMails.findIndex(mail => mail.id === mailId)
                    prevMails[prevMailIdx] = updatedMail
                    return [...prevMails]
                })
            })
        mail.isRead = !isRead
    }

    function setIsStar(ev, mail, isStar) {
        ev.stopPropagation()
        const mailId = mail.id
        mailService.save(mail)
            .then(updatedMail => {
                setMails(prevMails => {
                    const prevMailIdx = prevMails.findIndex(mail => mail.id === mailId)
                    prevMails[prevMailIdx] = updatedMail
                    return [...prevMails]
                })
            })
        mail.isStarred = !isStar
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

    function onSetSortBy(sortBy) {
        console.log(sortBy)
        setSortBy(prevSort => ({ ...prevSort, ...sortBy }))
    }

    function setFilterSent() {
        setFilterBy(prevFilter => ({ ...prevFilter, status: sent }))
    }

    function sidebarIsOpen(isSidebarOpen) {
        if (isSidebarOpen) return 'open'
        else return 'close'
    }

    function sidebarIsHover(isSidebarHover) {
        if (isSidebarHover) return 'hover'
        else return ''
    }

    if (!mails) return <div >Loading...</div>
    return (
        <section className="mail-index">
            <AppHeaderMail
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                filterBy={filterBy}
                onSetFilterBy={onSetFilterBy} />
            <div className="flex">
                <div className={`sidebar-container ${sidebarIsHover} ${sidebarIsOpen(isSidebarOpen)}`} onMouseEnter={() => setIsSidebarHover(true)} onMouseLeave={() => setIsSidebarHover(false)}>
                    <SidebarMail
                        isSidebarOpen={isSidebarOpen}
                        isSidebarHover={isSidebarHover}
                        onSetFilterBy={onSetFilterBy}
                        unreadMails={unreadMails}
                        filterBy={filterBy} />
                </div>
                <Outlet context={[mails, onComposeMail, onRemoveMail, setIsRead, filterBy, onSetFilterBy, sortBy, onSetSortBy, setIsStar]} />
            </div>
        </section >
    )
}

