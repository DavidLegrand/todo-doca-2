import { createContext, useState } from 'react';
const defaultUser = { id: 1, isLogged: false, firstName: 'David', lastName: "Legrand" }
const UserContext = createContext(defaultUser)

const UserProvider = ({ children }) => {
  const [user, setuser] = useState(defaultUser)
  return <UserContext.Provider value={[user, setuser]}>
    {children}
  </UserContext.Provider>
}

export { UserProvider, UserContext }