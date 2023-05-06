
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
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
import { FoldersProvider } from './hooks/FoldersContext';


function App() {

  return (
    <>
      <section className="notesapp">
        <Navbar />
        <FoldersProvider>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='notes' element={<Notes />}>
              {/* notes */}
              <Route index element={<AllNotes />} />
              <Route path='createnote' element={<CreateNote />} />
              <Route path='editnote/:id' element={<EditNote />} />

              {/* folders */}
              <Route path='folders' element={<Folders />} />
              <Route path='createfolder' element={<CreateFolder />} />
              <Route path='folders/foldernotes/:id' element={<FolderNotes />} />
            </Route>

            <Route path='*' element={<h2>Page Not Found</h2>} />
          </Routes>
        </FoldersProvider>
      </section>
    </>
  );
}

export default App;
