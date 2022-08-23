import React, { useState } from 'react'
import Modal from './components/Modal'
import SearchBar from './components/SearchBar'
import List from './components/List'

export default function App() {
  const [input, setInput] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [heroId, setHeroId] = useState(-1)

  const handleSubmit = (value) => {
    setInput(value)
  }

  const onEdit = (id) => {
    setHeroId(id)
    setShowModal(true)
  }

  return (
    <>
      {showModal &&
        <Modal
          heroId={heroId}
          setState={setShowModal}
        />
      }
      <div className='container'>
        <SearchBar
          handleSubmit={handleSubmit}
        />
        <List
          input={input}
          onEdit={onEdit}
        />
      </div>
    </>
    
  )
}

