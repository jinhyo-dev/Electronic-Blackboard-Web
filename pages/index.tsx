import moment from 'moment'
import { useState, useEffect } from "react"
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import $ from "jquery"
import useSWR from 'swr'

export default function main() {
  // const [location, setLocation] = useState(undefined)
  // const QueryhandleParam = (setValue) => (e) => setValue(e.target.value)
  // const router = useRouter()

  // const checkLocation = () => {
  //   if (location === undefined) {
  //     return alert('둘 중 하나를 선택하여주세요')
  //   } else if (location === 0) {
  //     router.push('/intercityBus')
  //   } else if (location === 1) {
  //     router.push('/cityBus')
  //   }
  // }

  const { data, error } = useSWR('/api/BusTable?start=봉양&destination=의성')

  if (error) {
    return (
      <div>error</div>
    )
  }
  if (!data) {
    return <div>loading...</div>
  } else {
    console.log(data)
    return (
      <div>
        {Object.values(data.data2).map((log: any) => (
          <div>time: {log.time} route: {log.route} bus_num: {log.route} destination: {log.destination}</div>
        ))}
      </div>
    )
  }

  // return ( 
  //     <div className="index">
  //     {/* <div className="title">
  //       <h3>Uiseong</h3>
  //       <h2>Bus Timetable</h2>
  //     </div>

  //     <div className="box">
  //       <h1>Choose one!</h1>
  //       <div >
  //         <label className="rad-label" style={{ width: "16rem", margin: "auto" }}>
  //           <input type="radio" className="rad-input" name="rad" onChange={(e) => {
  //             setLocation(0)
  //           }} />

  //           <div className="rad-design"></div>
  //           <div className="rad-text">시외버스</div>
  //         </label><br />

  //         <label className="rad-label" style={{ width: "16rem", margin: "auto" }}>
  //           <input type="radio" className="rad-input" name="rad" onChange={(e) => {
  //             setLocation(1)
  //           }} />

  //           <div className="rad-design"></div>
  //           <div className="rad-text">농어촌버스</div>
  //         </label>
  //       </div>
  //       <button className="btn" onClick={checkLocation} style={{fontSize: "1rem"}}>CONFIRM</button>
  //     </div > */}
  //   </div >
  // )
}