import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import Card from '../Card'
import './style.css'

export default function List(props) {
  const [data, setData] = useState({})
  useEffect(() => {
    const fetchData = async (input) => {
      await API.searchForHero(input)
        .then(({ data }) => setData(data))
        .catch((err) => console.log(err))
    }
    fetchData(props.input)
  }, [props.input, props.onEdit])

  return (
    <div className='list-container'>
      {(data.success && data.results) 
        ? (data.results.length>0
          ? <h2 className='res-text'>
              {data.results.length} result
              {data.results.length>1 ? 's' : ''} found for '{props.input}'
            </h2> 
          : <h2 className='res-text'>Uh oh! No hero found.</h2>
        )
        : <></>
      }
      {(data.success && data.results && data.results.length>0) &&
        (<div className='hero-list'>
          {data.results.map((hero, index) => {
            return (
              <Card
                key={index}
                id={hero.id}
                image={hero.image.url}
                name={hero.name}
                stats={hero.powerstats}
                onEdit={props.onEdit}
              />
            )
          })}
        </div>)
      }
    </div>
  )
}