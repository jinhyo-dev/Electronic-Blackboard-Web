import React, { useState } from 'react'
import Footer from './components/Footer'

export default function index() {
  const [timer, setTimer] = useState('00:00 (load)')
                    
  const currentTimer = () => {
    const date = new Date()
    const tmp_day = String(date).toUpperCase()
    const day = tmp_day.substring(0,3)
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    setTimer (`${hours}:${minutes} (${day})`)
  }

  const startTimer = () => {
    setInterval(currentTimer, 1000)
  }

  startTimer()

  return (
  <div className='middle-page'>
    <h1 className='time' style ={{ color: 'white' }}>{timer}</h1>
    <Footer />
  </div>
  )
}
