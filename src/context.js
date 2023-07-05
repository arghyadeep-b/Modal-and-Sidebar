import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSideBar = () => {
        console.log('sidebar:', isSidebarOpen);
        setIsSidebarOpen(true)
    };
    const closeSideBar = () => {
        console.log('sidebar:', isSidebarOpen);
        setIsSidebarOpen(false)
    };
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return <AppContext.Provider value={{
        isModalOpen, isSidebarOpen, openModal, closeModal, openSideBar, closeSideBar
    }}>
        {children}
    </AppContext.Provider>
}
// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider }
