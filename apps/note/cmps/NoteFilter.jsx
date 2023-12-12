import { NotePreview } from './NotePreview.jsx'

const { useOutletContext } = ReactRouterDOM

export function NoteFilter() {
  const [notes, onRemoveNote, , onAddNote] = useOutletContext()
  const noteWithoutImg = notes.filter(note => !note.info.url)
  return (
    <section className="pinned-container">
      {noteWithoutImg.map(note => (
        <NotePreview key={note.id} note={note} onAddNote={onAddNote} onRemoveNote={onRemoveNote} />
      ))}
    </section>
  )
  //   const [notes, onRemoveNote, , onAddNote] = useOutletContext()
  //   const noteWithImg = notes.filter(note => !!note.info.url)
  //   return (
  //     <section className="pinned-container">
  //       {noteWithImg.map(note => (
  //         <NotePreview key={note.id} note={note} onAddNote={onAddNote} onRemoveNote={onRemoveNote} />
  //       ))}
  //     </section>
  //   )
}
