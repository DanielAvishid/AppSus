import { NoteList } from '../cmps/NoteList.jsx'
import { noteService } from '../services/note.service.js'
import { SidebarNotes } from '../cmps/SideBarNotes.jsx'
import { AppHeaderNotes } from '../cmps/AppHeaderNotes.jsx'

const { useState, useEffect } = React
const { Outlet } = ReactRouterDOM

export function NoteIndex() {
  const [notes, setNotes] = useState([])
  //   const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
  console.log(notes)

  useEffect(() => {
    noteService.query().then(notes => {
      setNotes(notes)
      console.log(notes)
    })
  }, [])

  // TODO : see why thats isnt working well in NoteAdd (the note added to the DB!)
  function onAddNote(noteToAdd) {
    console.log('note to add', noteToAdd)
    noteService
      .save(noteToAdd)
      .then(() => {
        return noteService.query()
      })
      .then(notes => {
        setNotes(notes)
        console.log('set', notes)
      })
      .catch(err => {
        console.log('err:', err)
        // showErrorMsg('Error saving review')
      })
  }

  function onRemoveNote(note) {
    const noteId = note.id
    noteService
      .remove(noteId)
      .then(() => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
        // showSuccessMsg(`Book Removed! ${noteId}`)
      })
      .catch(err => {
        console.error(err)
        // showErrorMsg(`Problem Removing ${noteId}`)
      })
  }
  function getEmptyNote() {
    return noteService.getEmptyNote()
  }

  console.log(notes)
  if (!notes.length) return <div>Loading...</div>

  return (
    <section className="relative">
      <AppHeaderNotes />
      <div className="flex">
        <SidebarNotes />
        <div>
          <NoteList
            notes={notes}
            onRemoveNote={onRemoveNote}
            getEmptyNote={getEmptyNote}
            onAddNote={onAddNote}
          />
        </div>
        <Outlet context={onAddNote} />
      </div>
    </section>

    //     <section className="mail-index">
    //     <AppHeaderMail
    //         filterBy={filterBy}
    //         onSetFilterBy={onSetFilterBy} />
    //     <div className="flex">
    //         <SidebarMail
    //             unreadMails={unreadMails}
    //             setFilterSent={setFilterSent}
    //             onSetFilterBy={onSetFilterBy}
    //             filterBy={filterBy} />
    //         <Outlet context={[mails, onComposeMail, onRemoveMail, setUnreadOrRead, filterBy, onSetFilterBy]} />
    //     </div>
    // </section >
  )
}
