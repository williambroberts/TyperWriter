import React from 'react'

const LinkButton = ({icon,text,link}) => {
  return (
    <a className='link-button' href={link} target='_blank'>{icon}{text}</a>
  )
}

export default LinkButton