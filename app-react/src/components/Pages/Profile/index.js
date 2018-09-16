import React from 'react'
import './styles.css'

export default function ProfilePage(props) {
  const { children } = props
  return(
    <main className="profile container">
      <h1 className="profile__title">My Profile</h1>
      { children }
    </main>
  )
}
