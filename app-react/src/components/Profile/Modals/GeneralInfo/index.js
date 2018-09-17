import React, { Component } from 'react'
import './styles.css'

export default class GeneralInfo extends Component {
  state = {
    notes: ''
  }
  saveNotes = () => {
    let notes = this.state.notes

    if (notes) {
      this.props.saveData(notes)
      this.props.incrementPercentualProgress(25)
      this.props.toggleModal()
    }
    this.setState({notes: ''});
  }
  closeModal = () => {
    this.setState({notes: ''});
    this.props.toggleModal()
  }
  handleChange = (event) => {
    this.setState({notes: event.target.value});
  }
  render() {
    const { modalIsActive } = this.props
    const { notes } = this.state
    return(
      <div className={`profile__modal wrapper ${modalIsActive ? 'is-active' : ''}`} id="profile_modal">
        <div className="profile__modal-container">
          <div className="profile__modal-close" onClick={this.closeModal}>
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
              onChange={this.handleChange}
              placeholder="Notes"
              required
              rows="8"
              value={notes}></textarea>
            <div className="profile__modal-action">
              <button className="profile__modal-button" onClick={this.saveNotes}>save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
