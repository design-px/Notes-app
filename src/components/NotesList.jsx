
function NotesList({ note }) {


  return (
    <>
      <div className="note">
        <div className="note-header" data-note-id={note.id}>
          <button className="view-btn">View</button>
        </div>
        <div className="note-content">
          <h3>{note.title.length > 8 ? (note.title.substr(0, 10) + '...') : note.title}</h3>
          <p className="note-text">{note.details.length > 30 ? (note.details.substr(0, 100) + '...') : note.details}</p>
        </div>

        <div className="note-footer">
          <p className="note-date">{note.date}</p>
        </div>
      </div>

    </>
  );
}
export default NotesList;
