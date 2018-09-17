import React, { Component } from 'react';
import Header from './components/Header'
import ProfilePage from './components/Pages/Profile'
import ProfileProgress from './components/Profile/Progress'
import ProfileInfo from './components/Profile/Info'
import GeneralInfo from './components/Profile/Modals/GeneralInfo'

export default class App extends Component {
  state = {
    modalIsActive: false,
    data: '',
    progress: 0
  }
  toggleModal = () => {
    this.setState({ modalIsActive: !this.state.modalIsActive })
  }
  saveData = data => {
    this.setState({ data: data })
  }
  incrementPercentualProgress = percentual => {
    this.setState({progress: percentual})
  }
  render() {
    const { data, modalIsActive, progress } = this.state
    return (
      <div>
        <Header />
        <ProfilePage>
          <ProfileProgress
            progress={progress}
          />
          <ProfileInfo
            data={data}
            modalIsActive={modalIsActive}
            saveData={this.saveData}
            toggleModal={this.toggleModal}
          />
          <GeneralInfo
            modalIsActive={modalIsActive}
            incrementPercentualProgress={this.incrementPercentualProgress}
            saveData={this.saveData}
            toggleModal={this.toggleModal}
          />
        </ProfilePage>
      </div>
    )
  }
}
