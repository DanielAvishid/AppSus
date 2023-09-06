import { NotePreview } from './NotePreview.jsx'

// const { Link } = ReactRouterDOM

export function NoteList({ notes, updateNote, onRemoveNote }) {
  const pinnedNotes = notes.filter(note => note.isPinned === true)
  const regularNotes = notes.filter(note => note.isPinned === false)

  return (
    <section>
      PINNED
      {pinnedNotes.map(note => (
        <div key={note.id}>
          <NotePreview note={note} updateNote={updateNote} onRemoveNote={onRemoveNote} />
        </div>
      ))}
      OTHERS
      {regularNotes.map(note => (
        <div key={note.id}>
          <NotePreview note={note} updateNote={updateNote} onRemoveNote={onRemoveNote} />
        </div>
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
