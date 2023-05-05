
import NotesList from '../components/NotesList';
import { useMemo, useState } from 'react';
import NoteModal from '../components/NoteModal';
import { useFolders } from '../hooks/FoldersContext';

function AllNotes() {

  const { notes } = useFolders()
  const [text, setText] = useState('')
  const [modal, setModal] = useState('')
  const [noteToModal, setNoteToModal] = useState('')

  const filteredNotes = useMemo(() =>
    !text ? notes : notes.filter(note => note.title.toLowerCase().includes(text.toLowerCase()))
    , [notes, text])

  const handleNoteToModal = e => {
    if (e.target.className !== 'view-btn') return

    setModal('view-modal')

    const noteEl = e.target.parentNode
    const id = noteEl.dataset.noteId
    const findNote = filteredNotes.find(note => note.id === id)

    setNoteToModal(() => findNote)
  }

  return (
    <>
      <div>
        <div className='search-notes'>
          <input type="search" value={text} onChange={e => setText(e.target.value)} placeholder="Search your notes" />
          <button className="btn" onClick={() => setText('')}>
            &times;
          </button>
        </div>

        <div className="notes-list" onClick={handleNoteToModal}>
          {filteredNotes.length === 0 ?
            <p className='empty-note-msg'>No notes found</p> :
            filteredNotes.map(note =>
              <NotesList key={note.id} note={note} />)
          }
        </div>
      </div>
      <NoteModal to={`editnote/${noteToModal.id}`} noteToModal={noteToModal} modal={modal} setModal={setModal} />
    </>

  );
}
export default AllNotes;
