import { noteService } from '../services/note.service.js'

const { useState, useEffect } = React

export function NoteAdd({ onAddNote }) {
  const [noteInfo, setNoteInfo] = useState(noteService.getEmptyNote())

  function handleSubmit(ev) {
    ev.preventDefault()
    onAddNote(noteInfo)
  }

  function handleChange({ target }) {
    const field = target.name
    let value = target.value
    switch (target.type) {
      case 'number':
      case 'range':
        value = +value || ''
        break
      case 'checkbox':
        value = target.checked
        break
      default:
        break
    }
    setNoteInfo(prevInfo => ({ ...prevInfo, info: { ...prevInfo.info, [field]: value } }))
  }

  const { title, txt } = noteInfo.info

  return (
    <section className="note-add-container flex column align-center">
      <form id="note-form" className="note-form flex column" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={handleChange}
          type="text"
          placeholder="Enter a Title..."
          id="title"
          name="title"
        />
        <input
          value={txt}
          onChange={handleChange}
          type="text"
          placeholder="Fell free to enter whatever you want..."
          id="txt"
          name="txt"
        />
      </form>
      {/* TODO: check why they are not seperate (btn-divs) */}
      <div className="flex space-between align-center">
        <div className="note-preview-btns">
          <button>➕</button>
          <button>📌</button>
          <button>🎨</button>
          <button>🔔</button>
          <button>📷</button>
          <button>⋮</button>
        </div>
        <div>
          <button className="close-btn" type="submit" form="note-form">
            Close
          </button>
        </div>
      </div>
    </section>
  )
}
