// const { Link, NavLink } = ReactRouterDOM
const { useState, useEffect } = React

export function SidebarNotes({ onSetFilterBy, filterBy }) {
    //   const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
    const [isNotes, setIsNotes] = useState(true)
    //   const [isStarred, setIsStarred] = useState(false)
    //   const [isSent, setIsSent] = useState(false)
    //   const [isDraft, setIsDraft] = useState(false)
    //   const [isTrash, setIsTrash] = useState(false)

    // useEffect(() => {
    //   onSetFilterBy(filterByToEdit)
    // }, [filterByToEdit])

    function setActiveClass(isActive) {
        if (isActive) return 'active'
        else return ''
    }

    // function setActiveStatesFalse() {
    //   setIsNotes(false)
    //   setIsStarred(false)
    //   setIsSent(false)
    //   setIsDraft(false)
    //   setIsTrash(false)
    // }

    return (
        <section className="SidebarNotes">
            <section>
                <div
                    className={`flex space-between notes-btn ${setActiveClass(isNotes)}`}
                //   onClick={() => {
                //     setActiveStatesFalse()
                //     setIsNotes(true)
                //     setFilterByToEdit(prevFilter => ({ ...prevFilter, status: 'notes' }))
                //   }}
                >
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">lightbulb</span>
                        <span>Notes</span>
                    </div>
                </div>
                <div
                    className={`flex space-between starred-btn ${setActiveClass(isStarred)}`}
                    onClick={() => {
                        setActiveStatesFalse()
                        setIsStarred(true)
                    }}
                >
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">label</span>
                        <span>Label Name</span>
                    </div>
                </div>
                <div
                    className={`flex space-between sent-btn ${setActiveClass(isSent)}`}
                    onClick={() => {
                        setActiveStatesFalse()
                        setIsSent(true)
                        setFilterByToEdit(prevFilter => ({ ...prevFilter, status: 'sent' }))
                    }}
                >
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">send</span>
                        <span>Sent</span>
                    </div>
                </div>
                <div
                    className={`flex space-between draft-btn ${setActiveClass(isDraft)}`}
                    onClick={() => {
                        setActiveStatesFalse()
                        setIsDraft(true)
                        setFilterByToEdit(prevFilter => ({ ...prevFilter, status: 'draft' }))
                    }}
                >
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">note</span>
                        <span>Drafts</span>
                    </div>
                </div>
                <div
                    className={`flex space-between trash-btn ${setActiveClass(isTrash)}`}
                    onClick={() => {
                        setActiveStatesFalse()
                        setIsTrash(true)
                        setFilterByToEdit(prevFilter => ({ ...prevFilter, status: 'trash' }))
                    }}
                >
                    <div className="flex align-center">
                        <span className="material-symbols-outlined">delete</span>
                        <span>Trash</span>
                    </div>
                </div>
            </section>
        </section>
    )
}
