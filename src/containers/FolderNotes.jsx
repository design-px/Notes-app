
import { Link, useParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import { useState } from "react";
import NoteModal from "../components/NoteModal";
import { useFolders } from "../hooks/FoldersContext";

function FolderNotes() {
  const [modal, setModal] = useState('')
  const [noteToModal, setNoteToModal] = useState('')

  const { id } = useParams()
  const { folders } = useFolders()
  const folder = folders.find(prevFolder => prevFolder.id === id)
  const folderNotes = folder.folderNotes;

  const handleNoteToModal = e => {
    if (e.target.className !== 'view-btn') return

    setModal('view-modal')

    const noteEl = e.target.parentNode
    const id = noteEl.dataset.noteId
    const findNote = folderNotes.find(note => note.id === id)

    setNoteToModal(() => findNote)
  }

  return (
    <>
      <div className="btn-header">
        <Link to={`/notes/folders`} className='btn danger' style={{ marginBottom: '1rem' }} >Back</Link>
      </div>
      <div className="notes-list" onClick={handleNoteToModal}>
        {folderNotes.length === 0 ?
          <>
            <div className="empty-note-msg">
              <p>No notes found <br /> Create your Notes</p> <br />
              <Link to='/notes/createnote' className='btn add-btn'>Add new note <span> 📝 </span> </Link>
            </div>
          </> :

          folderNotes.map(note =>
            <NotesList key={note.id} note={note} />
          )}
      </div>
      <NoteModal to={`/notes/editnote/${noteToModal.id}`} noteToModal={noteToModal} modal={modal} setModal={setModal} />
    </>
  );
}
export default FolderNotes;
