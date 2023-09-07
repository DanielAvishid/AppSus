import { func } from 'prop-types'
import { NotePreview } from './NotePreview.jsx'

const { Outlet, useOutletContext } = ReactRouterDOM

export function NoteList({ notes, updateNote, onRemoveNote }) {
  const pinnedNotes = notes.filter(note => note.isPinned === true)
  const regularNotes = notes.filter(note => note.isPinned === false)

  return (
    <section>
      <h4>PINNED</h4>
      <div className="notes-container">
        {pinnedNotes.map(note => (
          <div key={note.id} className="pinned-container">
            <NotePreview note={note} updateNote={updateNote} onRemoveNote={onRemoveNote} />
          </div>
        ))}
      </div>

      <h4>OTHERS</h4>
      <div className="notes-container">
        {regularNotes.map(note => (
          <div key={note.id} className="unpinned-container">
            <NotePreview note={note} updateNote={updateNote} onRemoveNote={onRemoveNote} />
          </div>
        ))}
      </div>
    </section>
  )
}

// <button>
//   <Link to={`/note/${note.id}`}>Details</Link>
// </button>
// <button>
//   <Link to={`/note/edit/${note.id}`}>Edit</Link>
// </button>
