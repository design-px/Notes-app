import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useDateAndTime from '../hooks/useDateAndTime';

function EditNote({ notes, setNotes, setFolders }) {

  const { id } = useParams()
  const note = notes.find(prevNote => prevNote.id === id)
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const date = useDateAndTime()
  const navigate = useNavigate()


  const handleSubmit = e => {
    e.preventDefault()

    let fname = note.folderName

    if (title && details) {
      const editedNote = {
        ...note,
        title,
        details,
        date
      }

      setNotes(prevNotes => prevNotes.map(prevNote => {
        return prevNote.id === id ? editedNote : note
      }))

      setFolders(prevFolders => prevFolders.map(folder =>
        folder.folderName === fname ?
          {
            ...folder,
            folderNotes: folder.folderNotes.map(note => {
              if (note.id === id) {
                return {
                  ...note,
                  title,
                  details,
                  date
                }
              }
              else {
                return note
              }
            })
          }
          : folder
      ))
      navigate('/notes')
    }
  }

  return (
    <>
      <div className="btn-header">

        <Link to='/notes' className='btn danger'>Cancel</Link>

        <button className="btn success" onClick={handleSubmit}>Save changes</button>

      </div>

      <form className="note-form" onSubmit={handleSubmit}>

        <div className="label-box">
          <input type="text" id="note-title" autoFocus value={title} onChange={e => setTitle(e.target.value)} />
          <label htmlFor="note-title" className="input-label">Note Title</label>
        </div>

        <div className="label-box">
          <textarea id="note-details" rows="15" value={details} onChange={e => setDetails(e.target.value)}></textarea>
          <label htmlFor="note-details" className="textarea-label">Type your note...</label>
        </div>
      </form>
    </>
  );
}
export default EditNote;
