
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';


function Notes() {

  const location = useLocation();
  const path = location.pathname

  return (
    <>
      <header>
        <div className='notes-header'>
          <h3 className='title'>My Notes</h3>
          {path === '/notes' &&
            <Link to='createnote' className='btn add-btn'>Add new note <span> 📝 </span> </Link>
          }
          {path === '/notes/folders' &&
            <Link to='createfolder' className='btn add-btn'>Add new folder <span> 📂</span> </Link>
          }
        </div>
        <div className='notes-nav'>
          <NavLink to="/notes" end >All Notes</NavLink>
          <NavLink to="folders" >Folders</NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
}
export default Notes;
