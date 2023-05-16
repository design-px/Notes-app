import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFolders } from "../hooks/FoldersContext";

function RenameFolder() {

  const { setFolders } = useFolders()
  const params = useParams()

  const [folderName, setFolderName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    if (folderName) {

      setFolders(prevFolders => prevFolders.map(folder =>
        folder.id === params.id ?
          {
            ...folder,
            folderName
          }
          : folder
      ))

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
          <label htmlFor="note-title" className="input-label">Rename Folder</label>
        </div>
      </form>

    </>
  )
}

export default RenameFolder;