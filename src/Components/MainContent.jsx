import React from 'react'

import './MainContent.scss'
export default ({photos}) =>{

  return(
    <div className="Photos">
    {
      photos.map(photo => <div key={photo.id}>
        <img style={{borderColor: photo.color}} src={photo.urls.thumb} alt={photo.alt_description}/>
      </div>)
    }
  </div>
  )
  }

