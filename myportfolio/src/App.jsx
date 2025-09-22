import React from 'react'
import NavBar from './components/NavBar' 
import navData from './data/navData'
import ProfileCard from './components/ProfileCard'
import profileData from './data/profileData'

const App = () => {
  return (
    <>
      <NavBar navData={navData} />
      <ProfileCard profileData = {profileData}/>
    </>
  )
}

export default App