import React from 'react'
import github from '../assets/github.png'
import linkedIn from '../assets/LinkedIn.png'
import stackOverflow from '../assets/stack-overflow.png'
import email from '../assets/email.png'

export default function Footer() {
  return (
    <div className='footer'>
        <h6>Copyright © 2023 Yanfang</h6>
        <div className='d-flex justify-content-evenly'>
          <h6>
          <a href='https://github.com/zhou7cathy'><img className= "icon" src={github} alt= "icon of github"/>GitHub</a> |
          <a href='https://www.linkedin.com/in/yanfang-zhou-448315167/'><img className= "icon" src={linkedIn} alt= "icon of linkedIn"/>LinkedIn</a> |
          <a href='mailto:zhou7cathy@gmail.com'><img className= "icon" src={email} alt= "icon of email"/>email</a> |
          <a href='https://stackoverflow.com/users/21712763/cathyzhou'><img className= "icon" src={stackOverflow} alt= "icon of stackOverflow"/>Stack Overflow</a>
          </h6>
       </div>
    </div>
  )
}
