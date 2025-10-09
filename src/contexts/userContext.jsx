import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({ children }) => {

    const [login, setLogin] = useState(false);
    const nota = 10;

    return (
        <UserContext.Provider value={{login, setLogin, nota}}>
            {children}
        </UserContext.Provider>
    )
}