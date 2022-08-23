import React from 'react'
import './style.css'

export default function Card(props) {
  return (
    <div className='hero-card'>
      <img src={props.image} alt={props.name} />
      <div className='text'>
        <h1>{props.name}</h1>
        <div className='stats'>
          <div className='col'>
            <p>Intelligence: {props.stats.intelligence}</p>
            <p>Strength: {props.stats.strength}</p>
            <p>Speed: {props.stats.speed}</p>
          </div>
          <div className='col'>
            <p>Durability: {props.stats.durability}</p>
            <p>Power: {props.stats.power}</p>
            <p>Combat: {props.stats.combat}</p>
          </div>
        </div>
        <button
          onClick={() => props.onEdit(props.id)}
        >
          Alter Hero Stats
        </button>
      </div>
    </div>
  )
}
