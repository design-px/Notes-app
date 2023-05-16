import { Link } from "react-router-dom";
import { useFolders } from "../hooks/FoldersContext";

function Folders() {

  const { folders, setFolders } = useFolders()


  const handleDelete = (e) => {
    const element = e.target.classList[0]

    if (element !== 'delete-folder') return

    const deleteBtn = e.target
    const id = deleteBtn.dataset.folderId
    const fName = deleteBtn.dataset.folderName

    if (window.confirm(`Are you sure you want to delete folder: ${fName}?`)) {
      setFolders(prevFolders => prevFolders.filter(folder => folder.id !== id))
    }
  }

  return (
    <div>
      <div className="folders-list" onClick={handleDelete}>
        {folders.length === 0 ?
          <p className='empty-note-msg'>No folders found</p> :

          folders.map(folder =>
            <div className="folder" key={folder.id}>

              <label className="dots-icon" htmlFor={`${folder.folderName}`}>&#8942;</label>
              <input type="checkbox" className="dots-label" id={`${folder.folderName}`} />
              <div className={`tooltip`}>
                <button className="view-btn"><Link to={`/notes/renamefolder/${folder.id}`}>Rename</Link></button>
                <button className="delete-folder view-btn" data-folder-id={folder.id} data-folder-name={folder.folderName}>Delete</button>
              </div>

              <Link to={`foldernotes/${folder.id}`}>
                <span className="folder-icon"> 📂</span>
              </Link>
              <h3>{folder.folderName}</h3>
              <p>{`[${folder.folderNotes.length} notes]`}</p>
            </div>
          )}
      </div>

    </div>
  )
}

export default Folders;