import { Link } from "react-router-dom";

function Folders({ folders }) {

  return (
    <div>
      <div className="folders-list">
        {folders.length === 0 ?
          <p className='empty-notes'>No folders found</p> :

          folders.map(folder =>
            <Link to={`foldernotes/${folder.id}`} key={folder.id} className="note">
              <h3>{folder.folderName}</h3>
              <p>{`[${folder.folderNotes.length} notes]`}</p>
            </Link>
          )}
      </div>

    </div>
  )
}

export default Folders;