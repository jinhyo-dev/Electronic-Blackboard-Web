import React from 'react'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import Footer from './components/Footer'

export default function index() {
  const { data, error } = useSWR('../api/DB', fetcher)

  if (error) {
    return (
      <div>error</div>
    )
  }

  if (!data) {
    return <div>loading...</div>
  } 

  else {
    console.log(data)
    return (
      <div>
        <Footer />
        <table>
          <thead>
            <th>DATE</th>
            <th>CATEGORY</th>
            <th>CONTENTS</th>
          </thead>
          {Object.values(data.notice).map((log: any) => (
            <tbody>
              <tr key={1}>
                <td>{log.Date}</td>
                <td>{log.Category}</td>
                <td>{log.Contents}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    )
  }
}