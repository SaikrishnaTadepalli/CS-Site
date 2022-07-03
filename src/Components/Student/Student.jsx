import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import './Student.css';

const Student = ({ id, firstName, lastName, studentNum, program, term, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const studentImg = require("../../images/student.png");
  const gitHubIcon = require("../../images/icons/GitHub-Mark.png");
  const linkedInIcon = require("../../images/icons/linkedIn.png");
  const mailIcon = require("../../images/icons/mail.jpeg");
  const websiteIcon = require("../../images/icons/website.png");

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <button onClick={handleClick}>
        <div className="frontComponent" key={id}>
          <img src={studentImg} className='studentImg' alt="student image" />
          <div className='studentBasicInfo'>
            <p className='studentName'>{firstName + " " + lastName} </p>
            <div className='termAndProgram'><p>{term}</p> <p>{program}</p></div>
            <p>Why be coco when you can be loco.</p>
          </div>
        </div>
      </button>
      <div>
        <button onClick={handleClick}>
          <div className='backComponent'>
        <p className='studentInfo'>ieur wiguhweu giuhfwoe h wugtiaweuo wiuhffgtie awiuegtei hiehgierut ejhrhtuehtowijr wtbwaibte tkgbegheius
          euah eiaut aeuihtaoehteuat aeuhrjkgndzkj aiueksgjzkzjdsgk wuhieurhajtn aeitukr iuth eaurhesir eurhrdjkgd 
        </p>
          <div className='links'>
            <a href={link} className='studentLink'><img src={gitHubIcon} className="icon" alt="github icon"/></a>
            <a href={link} className='studentLink'><img src={linkedInIcon} className="icon" alt="linkedin icon"/></a>
            <a href={link} className='studentLink'><img src={mailIcon} className="icon" alt="mail icon"/></a>
            <a href={link} className='studentLink'><img src={websiteIcon} className="icon" alt="website icon" /></a>
          </div>
          </div>
        </button>
      </div>
    </ReactCardFlip>
  )
}

export default Student;