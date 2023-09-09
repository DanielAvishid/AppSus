const { Link, NavLink } = ReactRouterDOM
const { useState, useEffect } = React

export function SidebarMail({ unreadMails, onSetFilterBy, filterBy, isSidebarOpen, isSidebarHover }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
    const [isInbox, setIsInbox] = useState(true)
    const [isStarred, setIsStarred] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [isDraft, setIsDraft] = useState(false)
    const [isTrash, setIsTrash] = useState(false)

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

    useEffect(() => {
        if (filterBy.status === 'sent') {
            setActiveStatesFalse()
            setIsSent(true)
        } else if (filterBy.status === 'inbox') {
            setActiveStatesFalse()
            setIsInbox(true)
        } else if (filterBy.status === 'starred') {
            setActiveStatesFalse()
            setIsStarred(true)
        }
    }, [filterBy])

    function setActiveClass(isActive) {
        if (isActive) return 'active'
        else return ''
    }

    function sidebarIsOpen(isSidebarOpen) {
        if (isSidebarOpen) return 'open'
        else return ''
    }

    function sidebarIsHover(isSidebarHover) {
        if (isSidebarHover) return 'hover'
        else return ''
    }

    function setActiveStatesFalse() {
        setIsInbox(false)
        setIsStarred(false)
        setIsSent(false)
        setIsDraft(false)
        setIsTrash(false)
    }

    return (
        <section className={`SidebarMail ${sidebarIsHover(isSidebarHover)} ${sidebarIsOpen(isSidebarOpen)}`}>
            <Link className='compose-btn flex align-center justify-center' to={'/mail/list/new'}>
                <span className="material-symbols-outlined">
                    edit
                </span>
                {(isSidebarHover || isSidebarOpen) && <span className='compose-title'>Compose</span>}
            </Link>

            <section>
                <div
                    className={`flex space-between inbox-btn ${setActiveClass(isInbox)}`}
                    onClick={() => {
                        setActiveStatesFalse()
                        setIsInbox(true)
                        setFilterByToEdit(prevFilter => ({ ...prevFilter, status: 'inbox' }))
                    }}>
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">inbox</span>
                        {(isSidebarHover || isSidebarOpen) && <span>Inbox</span>}
                    </div>
                    {(isSidebarHover || isSidebarOpen) && <span className='unread-mails'>{unreadMails}</span>}
                </div>
                <div
                    className={`flex space-between starred-btn ${setActiveClass(isStarred)}`}
                    onClick={() => {
                        setActiveStatesFalse()
                        setIsStarred(true)
                        setFilterByToEdit(prevFilter => ({ ...prevFilter, status: 'starred' }))
                    }}>
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">star</span>
                        {(isSidebarHover || isSidebarOpen) && <span>Starred</span>}
                    </div>
                </div>
                <div
                    className={`flex space-between sent-btn ${setActiveClass(isSent)}`}
                    onClick={() => {
                        setActiveStatesFalse()
                        setIsSent(true)
                        setFilterByToEdit(prevFilter => ({ ...prevFilter, status: 'sent' }))
                    }}>
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">send</span>
                        {(isSidebarHover || isSidebarOpen) && <span>Sent</span>}
                    </div>
                </div>
                {/* <div
                    className={`flex space-between draft-btn ${setActiveClass(isDraft)}`}
                    onClick={() => {
                        setActiveStatesFalse()
                        setIsDraft(true)
                        setFilterByToEdit(prevFilter => ({ ...prevFilter, status: 'draft' }))
                    }}>
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">note</span>
                        <span>Drafts</span>
                    </div>
                </div> */}
                {/* <div
                    className={`flex space-between trash-btn ${setActiveClass(isTrash)}`}
                    onClick={() => {
                        setActiveStatesFalse()
                        setIsTrash(true)
                        setFilterByToEdit(prevFilter => ({ ...prevFilter, status: 'trash' }))
                    }}>
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">delete</span>
                        <span>Trash</span>
                    </div>
                </div> */}


            </section>
        </section>
    )
}