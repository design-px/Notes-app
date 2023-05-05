import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useDateAndTime from '../hooks/useDateAndTime';
import { useFolders } from "../hooks/FoldersContext";

function EditNote() {

  const { id } = useParams()
  const { notes, setFolders } = useFolders()

  const findNote = notes.find(prevNote => prevNote.id === id)
  const [editedTitle, setTitle] = useState(findNote.title)
  const [editedDetails, setDetails] = useState(findNote.details)
  const newDate = useDateAndTime()
  const navigate = useNavigate()


  const handleSubmit = e => {
    e.preventDefault()

    let fname = findNote.folderName

    if (editedTitle && editedDetails) {

      setFolders(prevFolders => prevFolders.map(folder =>
        folder.folderName === fname ?
          {
            ...folder,
            folderNotes: folder.folderNotes.map(note => {
              if (note.id === id) {
                return {
                  ...note,
                  title: editedTitle,
                  details: editedDetails,
                  date: newDate
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
          <input type="text" id="note-title" autoFocus value={editedTitle} onChange={e => setTitle(e.target.value)} />
          <label htmlFor="note-title" className="input-label">Note Title</label>
        </div>

        <div className="label-box">
          <textarea id="note-details" rows="15" value={editedDetails} onChange={e => setDetails(e.target.value)}></textarea>
          <label htmlFor="note-details" className="textarea-label">Type your note...</label>
        </div>
      </form>
    </>
  );
}
export default EditNote;
