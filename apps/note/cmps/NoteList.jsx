import { NotePreview } from './NotePreview.jsx'

const { Outlet, useOutletContext } = ReactRouterDOM

export function NoteList({ notes, updateNote, onRemoveNote }) {
  const pinnedNotes = notes.filter(note => note.isPinned === true)
  const regularNotes = notes.filter(note => note.isPinned === false)

  return (
    <section className="notes-container">
      <p>PINNED</p>
      {pinnedNotes.map(note => (
        <NotePreview
          key={note.id}
          note={note}
          updateNote={updateNote}
          onRemoveNote={onRemoveNote}
        />
      ))}

      <p>OTHERS</p>
      {regularNotes.map(note => (
        <NotePreview
          key={note.id}
          note={note}
          updateNote={updateNote}
          onRemoveNote={onRemoveNote}
        />
      ))}
    </section>
  )
}

// <button>
//   <Link to={`/note/${note.id}`}>Details</Link>
// </button>
// <button>
//   <Link to={`/note/edit/${note.id}`}>Edit</Link>
// </button>
