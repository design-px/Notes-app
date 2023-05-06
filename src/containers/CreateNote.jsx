import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDateAndTime from '../hooks/useDateAndTime';
import useUniqueId from "../hooks/useUniqueId";
import { useFolders } from "../hooks/FoldersContext";

function CreateNote() {

  const { folders, setFolders } = useFolders()

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [folderChoice, setFolderChoice] = useState('')
  const date = useDateAndTime()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    if (title && details) {
      const note = {
        id: useUniqueId(),
        folderName: folderChoice,
        title,
        details,
        date
      }

      setFolders(prevFolders => prevFolders.map(folder =>
        folder.folderName === folderChoice ?
          {
            ...folder,
            folderNotes: [note, ...folder.folderNotes]
          }
          : folder))

      navigate('/notes')
    }
  }

  return (
    <>
      <div className="btn-header">

        <Link to='/notes' className='btn danger'>Back</Link>

        <button className="btn success" onClick={handleSubmit
        }>Save</button>

      </div>

      {folders.length === 0 ?
        <p className="empty-note-msg">To save your notes in folder, please create a new folder in Folders tab</p> :
        <form className="note-form" onSubmit={handleSubmit}>

          <select name="folder-choice" onChange={e => setFolderChoice(e.target.value)}>
            <option value="">Select folder</option>
            {
              folders.map(({ folderName, id }) =>
                <option value={folderName} key={id}>{folderName}</option>)
            }
          </select>

          <div className="label-box">
            <input type="text" id="note-title" autoFocus value={title} onChange={e => setTitle(e.target.value)} />
            <label htmlFor="note-title" className="input-label">Note Title</label>
          </div>

          <div className="label-box">
            <textarea id="note-details" rows="15" value={details} onChange={e => setDetails(e.target.value)}></textarea>
            <label htmlFor="note-details" className="textarea-label">Type your note...</label>
          </div>

        </form>
      }
    </>
  );
}
export default CreateNote;
