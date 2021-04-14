import React, { useState } from 'react'

const SearchButton = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className="search">
      <form>
        <input 
        type='text'
        className='form-control'
        placeholder='search-postcode'
        value={text}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
        />
      </form>
    </section>
  )
}

export default SearchButton
