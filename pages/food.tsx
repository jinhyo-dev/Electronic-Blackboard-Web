import React from 'react'
import Footer from './components/Footer'
import foodData from './getFoodData/foodData.json'

export default function food() {
  const breakfast = []
  const lunch = []
  const dinner = []

  for (let i = 0; i < foodData['breakfast'].length; i++) {
    if (i == foodData['breakfast'].length - 1) {
      breakfast.push(foodData['breakfast'][i])    
    } else {
      breakfast.push(foodData['breakfast'][i], " / ")
    }
  }

  for (let i = 0; i < foodData['lunch'].length; i++) {
    if (i == foodData['lunch'].length - 1) {
      lunch.push(foodData['lunch'][i])    
    } else {
      lunch.push(foodData['lunch'][i], " / ")
    }
  }

  for (let i = 0; i < foodData['dinner'].length; i++) {
    if (i == foodData['dinner'].length - 1) {
      dinner.push(foodData['dinner'][i])    
    } else {
      dinner.push(foodData['dinner'][i], " / ")
    }
  }

  return (
    <div>
      <div className='foodTable'>
        <div className="dateOfFood">오늘의 급식정보<br /><br /></div>
        <div className='cardBox'>

          <div className='breakfast'>
            <div className='foodTime'> 아침<br /></div>
            <div className='menu'> {breakfast} </div>
          </div>

          <div className='lunch'>
            <div className='foodTime'>점심<br /></div>
            <div className='menu'> {lunch} </div>
          </div>

          <div className='dinner'>
            <div className='foodTime'>저녁<br /></div>
            <div className='menu'> {dinner} </div>  
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
