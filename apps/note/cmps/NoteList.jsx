import { NotePreview } from './NotePreview.jsx'
import { NoteAdd } from '../cmps/NoteAdd.jsx'

export function NoteList({ notes, onRemoveNote, onAddNote, getEmptyNote }) {
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

// <button>
//   <Link to={`/note/${note.id}`}>Details</Link>
// </button>
// <button>
//   <Link to={`/note/edit/${note.id}`}>Edit</Link>
// </button>
