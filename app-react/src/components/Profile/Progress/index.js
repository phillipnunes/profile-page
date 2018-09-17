import React, { Component } from 'react'
import './styles.css'

export default class Progress extends Component {
  render() {
    const { progress } = this.props
    return(
      <section className="profile__progress">
        <div className="profile__progress-box">
          <div className="profile__progress-container">
            <div className="profile__progress-content">
              <span className="profile__progress-title">Progress:</span>
              <span className="profile__progress-percent">{`${progress}%`}</span>
            </div>
            <div className="profile__progress-bar">
              <span style={{ width: `${progress}%` }} className="profile__progress-bar-element"></span>
            </div>
          </div>
          <p className="profile__progress-description">
            Complete 60% to apply for jobs  and let companies know you're interested
          </p>
        </div>
      </section>
    )
  }
}
