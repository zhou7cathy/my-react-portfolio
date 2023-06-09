import React from 'react'
import resume from '../../assets/Resume.pdf'

export default function Resume() {
  return (
    <div className='content'>
      <h2>Resume</h2>
      <p>
        Download my resume <a className='download' href={resume} download="Resume">Download</a>
      </p>
      <div className='proficiencies-container d-flex justify-content-between' >
        <div>
          <h3>Front-end Proficiencies</h3>
          <ul className='proficiencies'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h3>Back-end Proficiencies</h3>
          <ul className='proficiencies'>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
