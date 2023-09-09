// import { MailFilter } from '../cmps/MailFilter.jsx'

const { Link, NavLink } = ReactRouterDOM

export function AppHeaderNotes({ filterBy, onSetFilterBy }) {
  return (
    <header className="app-header-notes flex align-center">
      <div className="logo-container flex align-center">
        <span className="material-symbols-outlined menu">menu</span>
        <Link to="/">
          <img className="logo" src="/assets/img/Google_Keep_logo.png" alt="" />
        </Link>
        <span className="brand-name">Keep</span>
      </div>
      <div className="search-filter-container">
        <div className="search-filter-content flex space-between align-center">
          <button>
            <span className="material-symbols-outlined">search</span>
          </button>
          {/* <MailFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} /> */}
          <input type="text" placeholder="Search" />
          <button>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>
      <nav className="flex">
        <button className="flex align-center justify-center">
          <span className="material-symbols-outlined">apps</span>
        </button>
        <button className="flex align-center justify-center relative">
          <img src="/assets/img/dog-1.jpg" alt="" />
        </button>
        {/* <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/mail/list">Mail</NavLink>
          <NavLink to="/note">Note</NavLink>
        </div> */}
      </nav>
    </header>
  )
}
