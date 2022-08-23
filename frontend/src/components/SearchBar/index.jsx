import React from 'react'
import './style.css'

export default function SearchBar(props) {
  // submit function
  const onSubmit = () => {
    const value = document.getElementById('search').value
    props.handleSubmit(value)
  };

  // also submit when user presses Enter
  const handleKeyDown = event => {
    if (event.key === "Enter")
      onSubmit()
  }

  return (
    <div className='search-bar'>
      <input
        id='search'
        type='text'
        name='search'
        placeholder='Type in a superhero name...'
        autoComplete='off'
        onKeyDown={handleKeyDown}
      />
      <button onClick={onSubmit}>
        <img src='./assets/search.svg' style={{width: "30px"}} alt="search" />
      </button>
    </div>
  )
}
