import { NotePreview } from './NotePreview.jsx'
import { NoteAdd } from '../cmps/NoteAdd.jsx'

const { useNavigate } = ReactRouterDOM
const { Outlet, useOutletContext } = ReactRouterDOM

export function NoteList() {
  const [notes, onRemoveNote, getEmptyNote, onAddNote] = useOutletContext()
  // const navigate = useNavigate()
  console.log(notes)

  const pinnedNotes = notes.filter(note => note.isPinned === true)
  const regularNotes = notes.filter(note => note.isPinned === false)

  return (
    <section className="note-list-container">
      <NoteAdd onAddNote={onAddNote} getEmptyNote={getEmptyNote} />
      <section className="notes-container">
        <p>PINNED</p>
        <section className="pinned-container">
          {pinnedNotes.map(note => (
            <NotePreview
              key={note.id}
              note={note}
              onAddNote={onAddNote}
              onRemoveNote={onRemoveNote}
            />
          ))}
        </section>
        <p>OTHERS</p>
        <section className="other-container">
          {regularNotes.map(note => (
            <NotePreview
              key={note.id}
              note={note}
              onAddNote={onAddNote}
              onRemoveNote={onRemoveNote}
            />
          ))}
        </section>
      </section>
    </section>
  )
}
