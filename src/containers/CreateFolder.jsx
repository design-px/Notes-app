import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUniqueId from "../hooks/useUniqueId";

function CreateFolder({ setFolders }) {

  const [folderName, setFolderName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    if (folderName) {
      const folder = {
        id: useUniqueId(),
        folderName,
        folderNotes: [],
      }

      setFolders(prevFolders => [folder, ...prevFolders])
      navigate('/notes/folders')
    }
  }
  return (
    <>
      <div className="btn-header">
        <Link to='/notes/folders' className='btn danger'>Back</Link>
        <button className="btn success" onClick={handleSubmit
        }>Save</button>
      </div>

      <form className="note-form" onSubmit={handleSubmit}>
        <div className="label-box">
          <input type="text" id="note-title" autoFocus value={folderName} onChange={e => setFolderName(e.target.value)} />
          <label htmlFor="note-title" className="input-label">Folder Name</label>
        </div>
      </form>

    </>
  )
}

export default CreateFolder;