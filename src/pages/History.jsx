import React, { useEffect, useState } from 'react'
import { getHistory } from '../services/allApi'

function History() {
  const [allHistory, setAllHistory] = useState([])

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const res = await getHistory()
    console.log(res)
    setAllHistory(res.data)
    console.log(res.data)
  }

  return (
    <>
      <div>
       
        <table className='table border border-light' >
        <thead className='table-success' >
          <tr >
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Caption</th>
            <th scope="col">Video Url</th>
          </tr>
        </thead>

        {allHistory.map(item => (
        <tbody>
          <tr>
            <td style={{color:'limegreen'}}>{item.id}</td>
            <td style={{color:'limegreen'}}>{item.datetime}</td>
            <td style={{color:'limegreen'}}>{item.caption}</td>
            <td style={{color:'limegreen'}}>{item.url}</td>
          </tr>
        </tbody>
           ))}
      </table>
      </div>
    </>
  )
}

export default History