import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import './style.css'

export default function Modal(props) {
  const [data, setData] = useState({})
  const [stats, setStats] = useState({})
  useEffect(() => {
    const fetchInfo = async (id) => {
      await API.getHeroInfo(id)
        .then(({ data }) => {
          setData(data)
          setStats(data.results.powerstats)
        })
        .catch((err) => console.log(err))
    }
    fetchInfo(props.heroId)
  }, [props.heroId])

  const handleChange = (e) => {
    setStats({
      ...stats,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async () => {
    await API.setHeroStats(props.heroId, stats)
      .then(({ data }) => console.log(data))
    .catch((err) => console.log(err))
    props.setState(false)
  }

  return (
    <dialog open> 
      <h1>Alter Stats</h1>
      <h3>for {data.results && data.results.name}</h3>
        <label>
          Intelligence
          <input
            id='intelligence'
            name='intelligence'
            type='number'
            placeholder='Intelligence'
            value={stats.intelligence}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Strength
          <input
            id='strength'
            name='strength'
            type='number'
            placeholder='Strength'
            value={stats.strength}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Speed
          <input
            id='speed'
            name='speed'
            type='number'
            placeholder='Speed'
            value={stats.speed}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Durability
          <input
            id='durability'
            name='durability'
            type='number'
            placeholder='Durability'
            value={stats.durability}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Power
          <input
            id='power'
            name='power'
            type='number'
            placeholder='Power'
            value={stats.power}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Combat
          <input
            id='combat'
            name='combat'
            type='number'
            placeholder='Combat'
            value={stats.combat}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button onClick={handleSubmit}>OK</button>
        <button onClick={() => props.setState(false)}>Cancel</button>
    </dialog>
  )
}
