import React, { useState } from 'react'

import './Search.scss'
export default ({handleSearch}) =>{
  const [searchString, setSearchString] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!searchString) return

    handleSearch(searchString)
  }
  return(
    <form onSubmit={handleSubmit}>
      <div className="search">
        <img src="/Asset/search.svg" alt="saerchicon"/>
        <input type="search" value={searchString} onChange={(ev) => setSearchString(ev.target.value)} />
        <button type="submit">search</button>
      </div>
    </form>
  )
  }
