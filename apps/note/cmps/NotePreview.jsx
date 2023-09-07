const { useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

export function NotePreview({ note, updateNote, onRemoveNote }) {
  const [isPalleteOpen, setIsPalleteOpen] = useState(false)
  const [noteBgc, setNoteBgc] = useState(note.style.backgroundColor)
  const navigate = useNavigate()

  function onTogglePin(note) {
    note.isPinned = !note.isPinned
    updateNote(note)
  }

  function onTogglePallete() {
    setIsPalleteOpen(!isPalleteOpen)
  }
  function onNoteClick(noteId) {
    console.log('click on note', noteId)
    navigate(`/note/${noteId}`)
  }

  function onChangeNoteBgc(color, note) {
    console.log(note.style.backgroundColor)
    note.style.backgroundColor = color
    console.log(note.style.backgroundColor)
    setNoteBgc(color)
    updateNote(note)
  }

  return (
    <article className="note-preview-container" onClick={() => onNoteClick(note.id)}>
      <div className={`note-preview flex column justify-center ${noteBgc}`}>
        {note.info.url && <img src={note.info.url} alt="user-pic" />}
        {note.info.title && <h4 className="note-title">{note.info.title}</h4>}
        {note.info.txt && <p className="note-txt">{note.info.txt}</p>}

        <section className="note-preview-btns flex space-between">
          <button onClick={() => onRemoveNote(note)}>🗑️</button>
          <button onClick={() => onTogglePin(note)}>📌</button>
          <button onClick={() => onTogglePallete()}>🎨</button>
          <button>🔔</button>
          <button>📷</button>
          <button>⋮</button>
        </section>
      </div>

      {isPalleteOpen && (
        <div className="color-pallete flex">
          <button className="transparent" onClick={() => onChangeNoteBgc('transparent', note)}>
            ✖
          </button>
          <button className="lightblue" onClick={() => onChangeNoteBgc('lightblue', note)}></button>
          <button
            className="lightgreen"
            onClick={() => onChangeNoteBgc('lightgreen', note)}
          ></button>
          <button className="lightpink" onClick={() => onChangeNoteBgc('lightpink', note)}></button>
          <button
            className="lightcoral"
            onClick={() => onChangeNoteBgc('lightcoral', note)}
          ></button>
          <button
            className="lightsalmon"
            onClick={() => onChangeNoteBgc('lightsalmon', note)}
          ></button>
          <button
            className="lightseagreen"
            onClick={() => onChangeNoteBgc('lightseagreen', note)}
          ></button>
        </div>
      )}
    </article>
  )
}
