import { NotePreview } from './NotePreview.jsx'

const { useOutletContext, useParams } = ReactRouterDOM

export function NoteTxtFilter() {
  const [notes, onRemoveNote, , onAddNote] = useOutletContext()
  const { textInput } = useParams()

  const lowercasedTextInput = textInput.toLowerCase()

  const filteredNotes = notes.filter(note => {
    const lowercasedTitle = note.info.title && note.info.title.toLowerCase()
    const lowercasedTxt = note.info.txt && note.info.txt.toLowerCase()

    return (
      lowercasedTitle.includes(lowercasedTextInput) || lowercasedTxt.includes(lowercasedTextInput)
    )
  })

  console.log(filteredNotes)

  return (
    <section className="pinned-container filter-section">
      {filteredNotes.map(note => (
        <NotePreview key={note.id} note={note} onAddNote={onAddNote} onRemoveNote={onRemoveNote} />
      ))}
    </section>
  )
}
