import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async userinfo => {
    setUserData(userinfo)

    await localStorage.setItem('burger:userData', JSON.stringify(userinfo))
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('burger:userData')

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }
    }
    loadUserData()
  }, [])

  return (
        <UserContext.Provider value={{ putUserData, userData }}>
            {children}
        </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }
  return context
}

UserProvider.protoType = {
  children: PropTypes.noode
}
