import { FilterOptions } from '../../mail/cmps/FilterOptions.jsx'

const { useState, useEffect, useRef } = React

export function MailFilter({ filterBy, onSetFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        handleFocusChange()
        document.addEventListener('focusin', handleFocusChange)
        document.addEventListener('focusout', handleFocusChange)
        return () => {
            document.removeEventListener('focusin', handleFocusChange)
            document.removeEventListener('focusout', handleFocusChange)
        }
    })

    function handleFocusChange() {
        setIsFocused(inputRef.current === document.activeElement)
    }

    function handleChange({ target }) {
        let field = target.name
        let value = target.value
        if (field === 'to' && value) {
            setFilterByToEdit(prevFilter => ({ ...prevFilter, to: '', from: '', status: 'sent', [field]: value }))
        } else if (field === 'from') {
            setFilterByToEdit(prevFilter => ({ ...prevFilter, to: '', from: '', status: 'inbox', [field]: value }))
        }
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function getFocusClass(isFocused) {
        if (isFocused) return 'focus'
        else return 'not-focus'
    }

    function handleKeyPress(ev) {
        if (ev.key === 'Enter') onSubmitFilter()
    }

    function onSubmitFilter() {
        setIsFilterOpen(false)
        onSetFilterBy(filterByToEdit)
    }

    function openFilterOptions(isFilterOpen) {
        setIsFilterOpen(!isFilterOpen)
    }

    return (
        <section className='MailFilter'>
            <div className={`search-container flex align-center ${getFocusClass(isFocused)}`}>
                <span
                    title='Search'
                    className={`material-symbols-outlined ${getFocusClass(isFocused)}`}
                    onClick={() => onSubmitFilter()}>
                    search
                </span>
                <input
                    ref={inputRef}
                    className='search-input'
                    onChange={handleChange}
                    type='text'
                    placeholder='Search mail'
                    name='txt'
                    onKeyDown={handleKeyPress}
                />
                <span
                    title='Show search options'
                    className={`material-symbols-outlined ${getFocusClass(isFocused)}`}
                    onClick={() => openFilterOptions(isFilterOpen)}>
                    tune
                </span>
            </div>
            {isFilterOpen && <section className="filter-container">
                <FilterOptions
                    onSubmitFilter={onSubmitFilter}
                    handleChange={handleChange}
                />
            </section>}
        </section>
    )
}