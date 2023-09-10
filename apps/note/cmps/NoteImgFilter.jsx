import { NotePreview } from './NotePreview.jsx'

const { useOutletContext } = ReactRouterDOM

export function NoteImgFilter() {
  const [notes, onRemoveNote, , onAddNote] = useOutletContext()
  const noteWithImg = notes.filter(note => !!note.info.url)
  return (
    <section className="pinned-container filter-section">
      {noteWithImg.map(note => (
        <NotePreview key={note.id} note={note} onAddNote={onAddNote} onRemoveNote={onRemoveNote} />
      ))}
    </section>
  )
}
