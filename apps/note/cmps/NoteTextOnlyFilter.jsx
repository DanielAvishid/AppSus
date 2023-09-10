import { NotePreview } from './NotePreview.jsx'

const { useOutletContext } = ReactRouterDOM

export function NoteTextOnlyFilter() {
  const [notes, onRemoveNote, , onAddNote] = useOutletContext()
  const noteWithoutImg = notes.filter(note => !note.info.url)
  return (
    <section className="pinned-container filter-section">
      {noteWithoutImg.map(note => (
        <NotePreview key={note.id} note={note} onAddNote={onAddNote} onRemoveNote={onRemoveNote} />
      ))}
    </section>
  )
}
