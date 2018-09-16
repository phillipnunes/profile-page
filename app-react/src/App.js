import React, { Component } from 'react';
import Header from './components/Header'
import ProfilePage from './components/Pages/Profile'
import ProfileProgress from './components/Profile/Progress'
import ProfileInfo from './components/Profile/Info'
import GeneralInfo from './components/Profile/Modals/GeneralInfo'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProfilePage>
          <ProfileProgress />
          <ProfileInfo />
          <GeneralInfo />
        </ProfilePage>
      </div>
    )
  }
}
