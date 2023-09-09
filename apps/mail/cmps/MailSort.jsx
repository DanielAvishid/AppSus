const { useState, useEffect } = React

export function MailSort({ onSetSortBy, sortBy }) {
    const [sortToEdit, setSortByToEdit] = useState(sortBy)
    const [isSubDec, setIsSubDec] = useState(false)
    const [isDateDec, setIsDateDec] = useState(false)

    function onClickDate(isDec) {
        if (isDec) setSortByToEdit(() => ({ descendD: false, descendS: false, date: true, subject: false }))
        else setSortByToEdit(() => ({ descendD: true, descendS: false, date: true, subject: false }))
        onSetSortBy(sortToEdit)
        setIsDateDec(!isDec)
    }

    function onClickSubject(isDec) {
        if (isDec) setSortByToEdit(() => ({ descendD: false, descendS: false, date: false, subject: true }))
        else setSortByToEdit(() => ({ descendD: false, descendS: true, date: false, subject: true }))
        onSetSortBy(sortToEdit)
        setIsSubDec(!isDec)
    }

    return (
        <section className='mail-sort flex'>
            <button className='flex align-center' onClick={() => onClickDate(isDateDec)}>
                {isDateDec && <span className="material-symbols-outlined">
                    stat_1
                </span>}
                {!isDateDec && <span className="material-symbols-outlined">
                    expand_more
                </span>}
                Date</button>
            <button className='flex align-center justify-center' onClick={() => onClickSubject(isSubDec)}>{isSubDec && <span className="material-symbols-outlined">
                stat_1
            </span>}
                {!isSubDec && <span className="material-symbols-outlined">
                    expand_more
                </span>}Subject</button>
        </section>
    )
}