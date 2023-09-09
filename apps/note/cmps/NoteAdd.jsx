import { NotePallete } from '../cmps/NotePallete.jsx'

const { useState } = React

export function NoteAdd({ onAddNote, getEmptyNote }) {
  const [note, setNote] = useState(getEmptyNote())
  console.log(note)
  const [isPalleteOpen, setIsPalleteOpen] = useState(false)
  const [pinned, setPinned] = useState('')
  const [noteBgc, setNoteBgc] = useState('')

  function handleSubmit(ev) {
    console.log(ev)
    ev.preventDefault()
    onAddNote(note)
    setNote(getEmptyNote())
    setPinned('')
    setNoteBgc('')
    setIsPalleteOpen(false)
  }

  function onTogglePin() {
    note.isPinned = !note.isPinned
    if (note.isPinned) {
      setPinned('pinned')
    } else {
      setPinned('')
    }
    setNote(note)
  }

  function onTogglePallete() {
    setIsPalleteOpen(!isPalleteOpen)
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
    setNote(prevInfo => ({ ...prevInfo, info: { ...prevInfo.info, [field]: value } }))
  }

  function onChangeNoteBgc(color, note) {
    console.log(note.style.backgroundColor)
    note.style.backgroundColor = color
    console.log(note.style.backgroundColor)
    setNoteBgc(color)
  }

  const { title, txt, url } = note.info

  return (
    <section className={`note-add-container flex column align-center ${noteBgc}`}>
      <form id="note-form" className="note-form flex column" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={handleChange}
          type="text"
          placeholder="Title"
          id="title"
          name="title"
        />
        <input
          value={txt}
          onChange={handleChange}
          type="text"
          placeholder="Take a note..."
          id="txt"
          name="txt"
        />
        <input
          value={url}
          onChange={handleChange}
          type="text"
          placeholder="You can also add a URL!"
          id="url"
          name="url"
        />
      </form>

      <div className="flex space-between align-center">
        <div className="note-add-btns">
          <button className={`${pinned}`} onClick={() => onTogglePin()}>
            <span className="material-symbols-outlined">star</span>
          </button>
          <button onClick={() => onTogglePallete()}>
            <span className="material-symbols-outlined">palette</span>
          </button>
        </div>
        <div>
          <button className="close-btn" type="submit" form="note-form">
            Close
          </button>
        </div>
      </div>
      {isPalleteOpen && <NotePallete note={note} onChangeNoteBgc={onChangeNoteBgc} />}
    </section>
  )
}
