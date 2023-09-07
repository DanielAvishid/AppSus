const { useState, useEffect } = React

export function NotePreview({ note, updateNote, onRemoveNote }) {
  const [isPalleteOpen, setIsPalleteOpen] = useState(false)

  function onTogglePin(note) {
    note.isPinned = !note.isPinned
    updateNote(note)
  }

  function onTogglePallete() {
    setIsPalleteOpen(!isPalleteOpen)
    console.log('hello')
    console.log(isPalleteOpen)
  }

  return (
    <article className="note-preview-container">
      <div className="note-preview flex column justify-center">
        {note.info.url && <img src={note.info.url} alt="user-pic" />}
        {note.info.title && <h4 className="note-title">{note.info.title}</h4>}
        {note.info.txt && <p className="note-txt">{note.info.txt}</p>}

        <section className="note-preview-btns flex space-between">
          <button onClick={() => onRemoveNote(note)}>🗑️</button>
          <button onClick={() => onTogglePin(note)}>📌</button>
          <button onClick={() => onTogglePallete()}>🎨</button>
          {/* <select onChange={() => onChangeNoteBgc(note)}>
          <option className="transparent" value="transparent">
            🎨
          </option>
          <option className="lightblue" value="lightblue"></option>
          <option className="lightgreen" value="lightgreen"></option>
          <option className="lightpink" value="lightpink"></option>
          <option className="lightcoral" value="lightcoral"></option>
          <option className="lightsalmon" value="lightsalmon"></option>
          <option className="lightseagreen" value="lightseagreen"></option>
        </select> */}
          <button>🔔</button>
          <button>📷</button>
          <button>⋮</button>
        </section>
      </div>
      {isPalleteOpen && (
        <div className="color-pallete flex">
          <button className="lightblue"></button>
          <button className="lightgreen"></button>
          <button className="lightpink"></button>
          <button className="lightcoral"></button>
          <button className="lightsalmon"></button>
          <button className="lightseagreen"></button>
        </div>
      )}
    </article>
  )
}
