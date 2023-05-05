import { createContext, useContext, useEffect, useMemo, useState } from "react";

// create context
const FoldersContext = createContext({});


// create context provider
export const FoldersProvider = ({ children }) => {

  const foldersContainer = JSON.parse(localStorage.getItem('folders-container')) || []

  const [folders, setFolders] = useState(foldersContainer)

  const notes = useMemo(() => {
    return (folders.map(folder => folder.folderNotes)).flat()
  }, [folders])

  useEffect(() => {
    localStorage.setItem('folders-container', JSON.stringify(folders))
  }, [folders])

  return <FoldersContext.Provider value={{ folders, setFolders, notes }}>{children}</FoldersContext.Provider>

}

// create context consumer
export const useFolders = () => useContext(FoldersContext)