export function NotePreview({ note, updateNote, onRemoveNote }) {
  function onTogglePin(note) {
    note.isPinned = !note.isPinned
    updateNote(note)
    // noteService.save(note)
    // noteService.query().then(notes => {
    //   setNotes(notes)
    // })
  }
  // console.log(note.id)

  return (
    <article className="note-preview flex column">
      <h2>{note.info.title}</h2>
      <h4>{note.info.txt}</h4>
      <section className="note-preview-btns flex space-between">
        <button onClick={() => onRemoveNote(note)}>🗑️</button>
        <button onClick={() => onTogglePin(note)}>📌</button>
        <button>🎨</button>
        <button>🔔</button>
        <button>📷</button>
        <button>⋮</button>
      </section>
    </article>
  )
}
