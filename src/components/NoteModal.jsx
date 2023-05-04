import { Link } from "react-router-dom";

function NoteModal({ to, noteToModal, modal, setModal, setNotes, setFolders }) {

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete?')) {
      let fname = noteToModal.folderName

      setNotes(prevNotes => prevNotes.filter(prevNote => {
        return prevNote.id !== noteToModal.id
      }))

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
