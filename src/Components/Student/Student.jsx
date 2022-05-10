import React from 'react'

export const Student = ({id, firstName, lastName, studentNum, program, term, link}) => {
  return (
    <div className="student" key={id}>
        <p>
            {firstName + " " + lastName + " | " + studentNum + " | " + program + " | " + term + " | Link: "}
            <a href={link}>
                { (link.length <= 25) ? link : link.slice(0, 25) + "..." }
            </a>
        </p>
    </div>
  )
}

export default Student;