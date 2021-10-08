import { createContext, useState } from 'react';
const defaultList = []
const ListContext = createContext(defaultList)

const ListProvider = ({ children }) => {
  const [list, setList] = useState(defaultList)
  return <ListContext.Provider value={[list, setList]}>
    {children}
  </ListContext.Provider>
}

export { ListProvider, ListContext }