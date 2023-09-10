const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { About } from './views/About.jsx'
import { Home } from './views/Home.jsx'
import { MailIndex } from './apps/mail/views/MailIndex.jsx'
import { MailCompose } from './apps/mail/cmps/MailCompose.jsx'
import { NoteIndex } from './apps/note/views/NoteIndex.jsx'
import { NoteList } from './apps/note/cmps/NoteList.jsx'
import { NoteImgFilter } from './apps/note/cmps/NoteImgFilter.jsx'
import { NoteTextOnlyFilter } from './apps/note/cmps/NoteTextOnlyFilter.jsx'
import { NoteTxtFilter } from './apps/note/cmps/NoteTxtFilter.jsx'
import { NoteSearch } from './apps/note/cmps/NoteSearch.jsx'
import { NoteDetails } from './apps/note/views/NoteDetails.jsx'
import { MailList } from './apps/mail/cmps/MailList.jsx'
import { MailDetails } from './apps/mail/views/MailDetails.jsx'

export function App() {
  return (
    <Router>
      <section className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mail" element={<MailIndex />}>
            <Route path=":mailId" element={<MailDetails />} />
            <Route path="list" element={<MailList />}>
              <Route path="new" element={<MailCompose />} />
            </Route>
            <Route path="sent" element={<MailDetails />}>
              <Route path="new" element={<MailCompose />} />
            </Route>
          </Route>
          <Route path="/note" element={<NoteIndex />}>
            <Route path=":noteId" element={<NoteDetails />} />
            <Route path="list" element={<NoteList />} />
            <Route path="search" element={<NoteSearch />} />
            <Route path="search/image" element={<NoteImgFilter />} />
            <Route path="search/text" element={<NoteTextOnlyFilter />} />
            <Route path="search/:textInput" element={<NoteTxtFilter />} />
          </Route>
        </Routes>
      </section>
    </Router>
  )
}
