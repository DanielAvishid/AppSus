import { NotePreview } from './NotePreview.jsx'

// const { Link } = ReactRouterDOM

export function NoteList({ notes, onRemoveNote }) {
  console.log(notes)
  return (
    <section>
      {notes.map(note => (
        <div key={note.id}>
          <NotePreview note={note} />
          <section>
            <button onClick={() => onRemoveNote(note.id)}>Remove Note</button>
            <button onClick={() => onTogglePin(note.isPinned)}>PIN</button>
            {/* <button>
              <Link to={`/note/${note.id}`}>Details</Link>
            </button>
            <button>
              <Link to={`/note/edit/${note.id}`}>Edit</Link>
            </button> */}
          </section>
        </div>
      ))}
    </section>
  )
}
