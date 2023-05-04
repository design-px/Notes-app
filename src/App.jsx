
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar } from './components';
import {
  Home,
  Notes,
  AllNotes,
  CreateNote,
  EditNote,
  Folders,
  CreateFolder,
  FolderNotes
} from './containers';
import './App.scss';


function App() {
  const initialNotes = JSON.parse(localStorage.getItem('notes')) || []
  const foldersContainer = JSON.parse(localStorage.getItem('folders-container')) || []

  const [notes, setNotes] = useState(initialNotes)
  const [folders, setFolders] = useState(foldersContainer)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    localStorage.setItem('folders-container', JSON.stringify(folders))
  }, [folders])

  return (
    <>
      <section className="notesapp">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='notes' element={<Notes />}>
            {/* notes */}
            <Route index element={<AllNotes notes={notes} setNotes={setNotes} setFolders={setFolders} />} />
            <Route path='createnote' element={<CreateNote setNotes={setNotes} folders={folders} setFolders={setFolders} />} />
            <Route path='editnote/:id' element={<EditNote notes={notes} setNotes={setNotes} setFolders={setFolders} />} />

            {/* folders */}
            <Route path='folders' element={<Folders folders={folders} />} />
            <Route path='createfolder' element={<CreateFolder setFolders={setFolders} />} />
            <Route path='folders/foldernotes/:id' element={<FolderNotes folders={folders} />} />
          </Route>

          <Route path='*' element={<h2>Page Not Found</h2>} />
        </Routes>
      </section>
    </>
  );
}

export default App;
