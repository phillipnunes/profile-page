import React, { Component } from 'react'
import './styles.css'

export default class GeneralInfo extends Component {
  render() {
    return(
      <div className="profile__modal wrapper" id="profile_modal">
        <div className="profile__modal-container">
          <div className="profile__modal-close" id="profile_modal_close">
            <span className="profile__modal-close-item"></span>
            <span className="profile__modal-close-item"></span>
          </div>
          <div className="profile__modal-content">
            <p className="profile__modal-title">introduce yourself</p>
            <p className="profile__modal-description">
              Add a small introduction about yourself, outlining your career to date, and the career path that you would like to take.
            </p>
            <p className="profile__modal-description">
              Showcase your strenght and values, along with your personality.
            </p>
            <textarea
              className="profile__modal-notes"
              id="profile_modal_notes"
              maxLength="210"
              name="notes"
              placeholder="Notes"
              required
              rows="8"></textarea>
            <div className="profile__modal-action">
              <button className="profile__modal-button" id="profile_modal_button">save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
