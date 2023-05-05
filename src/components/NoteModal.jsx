import { Link } from "react-router-dom";
import { useFolders } from "../hooks/FoldersContext";

function NoteModal({ to, noteToModal, modal, setModal }) {

  const { setFolders } = useFolders()

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete?\n ${noteToModal.title} note from ${noteToModal.folderName}`)) {
      let fname = noteToModal.folderName

      setFolders(prevFolders => prevFolders.map(folder =>
        folder.folderName === fname ?
          {
            ...folder,
            folderNotes: folder.folderNotes.filter(note => note.id !== noteToModal.id)
          }
          : folder
      ))

      setModal('')
    }
  }

  return (
    <>
      <div className={` note-modal ${modal}`}>
        <div className="note">

          <button className="close-btn" aria-label="close" onClick={() => setModal('')}>&#x2718;</button>

          <div className="note-header">
            <Link to={to}><button className="btn">Edit</button></Link>
            <button className="btn danger" onClick={handleDelete}>Delete</button>
          </div>

          <div className="note-content">
            <h3 className="note-title">{noteToModal.title}</h3>
            <p>{noteToModal.details}</p>
          </div>

        </div>
      </div>

    </>
  );
}
export default NoteModal;
