const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './views/About.jsx'
import { Home } from './views/Home.jsx'
import { MailIndex } from './apps/mail/views/MailIndex.jsx'
import { MailCompose } from './apps/mail/cmps/MailCompose.jsx'
import { NoteIndex } from './apps/note/views/NoteIndex.jsx'
import { NoteDetails } from './apps/note/views/NoteDetails.jsx'
import { MailList } from './apps/mail/cmps/MailList.jsx'
import { MailDetails } from './apps/mail/views/MailDetails.jsx'

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mail" element={<MailIndex />}>
            <Route path=":mailId" element={<MailDetails />} />
            <Route path="inbox" element={<MailList />}>
              <Route path="new" element={<MailCompose />} />
            </Route>
            <Route path="sent" element={<MailDetails />} >
              <Route path="new" element={<MailCompose />} />
            </Route>
          </Route>
          <Route path="/note" element={<NoteIndex />}>
            <Route path=":noteId" element={<NoteDetails />} />
          </Route>
        </Routes>
      </section>
    </Router>
  )
}
