import React, { Component } from 'react'
import './styles.css'

export default class ProfileInfo extends Component {
  render() {
    const { data, toggleModal } = this.props
    return(
      <section className="profile__info">
        <div className="profile__info-container">
          <h2 className="profile__info-title">introduction</h2>
          <p className="profile__info-description" id="profile_info_description">
            {
              data ?
              data :
              'Take a brief moment to introduce yourself and increase your Profile strenght by 25%'
            }
          </p>
          <div className="profile__info-action">
            <button className="profile__info-button" onClick={toggleModal}>add</button>
          </div>
        </div>
      </section>
    )
  }
}
