const { useState, useEffect } = React
// const { useParams, useNavigate } = ReactRouterDOM
// const { useOutletContext } = ReactRouterDOM

export function NoteEdit({ note }) {
  const [updatedNote, setUpdatedNote] = useState(note)

  function handleSubmit(ev) {
    console.log(ev)
    ev.preventDefault()
    onAddNote(note)
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

    setUpdatedNote(prevNote => ({ ...prevNote, info: { ...prevNote.info, [field]: value } }))
  }

  const { title, txt, url } = updatedNote.info

  return (
    <section>
      <form
        id="note-updated-form"
        className="note-updated-form flex column"
        onSubmit={handleSubmit}
      >
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
        <input
          value={url}
          onChange={handleChange}
          type="text"
          placeholder="You can also add a URL!"
          id="url"
          name="url"
        />
      </form>

      {/* TODO: check why they are not seperate (btn-divs) */}
      <div className="flex space-between align-center">
        <div className="note-preview-btns">
          <button>
            <span className="material-symbols-outlined">file_copy</span>
          </button>
          <button>
            <span className="material-symbols-outlined">star</span>
          </button>
          <button>
            <span className="material-symbols-outlined">palette</span>
          </button>
          <button>
            <span className="material-symbols-outlined">new_label</span>
          </button>
          <button>
            <span className="material-symbols-outlined">image</span>
          </button>
          <button>
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
        <div>
          {/* TODO: the submission should be execute just whenclick enter or clicking ouside of the form div  */}
          <button className="close-btn" type="submit" form="note-form">
            Close
          </button>
        </div>
      </div>
    </section>
  )
}
