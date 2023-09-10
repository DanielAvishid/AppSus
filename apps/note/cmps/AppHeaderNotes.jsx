// import { MailFilter } from '../cmps/MailFilter.jsx'
import { MenuModal } from '../../../cmps/MenuModal.jsx'

const { useState, useRef } = React

const { Link, NavLink } = ReactRouterDOM

export function AppHeaderNotes({ filterBy, onSetFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const inputRef = useRef('')

  function handleChange({ target }) {
    let field = target.name
    let value = target.value
    if (field === 'to' && value) {
      setFilterByToEdit(prevFilter => ({
        ...prevFilter,
        to: '',
        from: '',
        status: 'sent',
        [field]: value,
      }))
    } else if (field === 'from') {
      setFilterByToEdit(prevFilter => ({
        ...prevFilter,
        to: '',
        from: '',
        status: 'inbox',
        [field]: value,
      }))
    }
    setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
  }
  function handleKeyPress(ev) {
    if (ev.key === 'Enter') onSubmitFilter()
  }

  function onSubmitFilter() {
    setIsFilterOpen(false)
    onSetFilterBy(filterByToEdit)
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="app-header-notes flex align-center">
      <div className="logo-container flex align-center">
        <span className="material-symbols-outlined menu">menu</span>
        <Link to="/">
          <img className="logo" src="./././img/Google_Keep_logo.png" alt="" />
        </Link>
        <span className="brand-name">Keep</span>
      </div>
      <div className="search-filter-container">
        <div className="search-filter-content flex space-between align-center">
          <Link
            to={inputRef.current.value ? `/note/search/${inputRef.current.value}` : '/note/search'}
            className="flex"
          >
            <button>
              <span className="material-symbols-outlined">search</span>
            </button>

            {/* <MailFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} /> */}
            <input
              ref={inputRef}
              className="search-input"
              onChange={handleChange}
              type="text"
              placeholder="Search"
              name="txt"
              onKeyDown={handleKeyPress}
            />
          </Link>

          <Link to="/note/list">
            <button>
              <span className="material-symbols-outlined">close</span>
            </button>
          </Link>
        </div>
      </div>
      <nav className="flex">
        <div className="flex align-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <button
          className="flex align-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">apps</span>
        </button>
        <button className="flex align-center justify-center relative">
          <img src="./././img/dog-1.jpg" alt="" />
        </button>
      </nav>
      {isMenuOpen && <MenuModal />}
    </header>
  )
}
