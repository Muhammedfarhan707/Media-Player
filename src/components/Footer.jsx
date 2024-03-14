import React from 'react'

import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
    <div className='w-100 d-flex flex-column justify-content-center bg-light'>
    <div className='row p-5'>
    
    <div className='col'>
    <p style={{color:'black'}}>Media Player 2024</p>
    <p style={{textAlign:'justify', color:'black'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam suscipit eligendi nam tenetur
     saepe ullam delectus quis harum inventore quos, numquam hic sequi praesentium expedita perferendis
        assumenda deleniti repellat beatae.</p>
    </div>

    <div className='col'>
      <h4 style={{color:'black'}}>Links</h4>
      <Link to={'./'} style={{color:'black'}}>Landing</Link><br />
      <Link to={'./dashboard'} style={{color:'black'}}>Dashboard</Link><br />
      <Link to={'./history'} style={{color:'black'}}>History</Link>
    </div>

    <div className='col'>
      <h4 style={{color:'black'}}> References</h4>
      <a href="https://getbootstrap.com/" target='_blank' style={{color:'black'}}>Bootstrap</a><br />
      <a href="https://react-bootstrap.github.io/" target='_blank' style={{color:'black'}}>React-Bootstrap</a><br />
      <a href="https://react.dev/"target='_blank'style={{color:'black'}}>React</a><br />
    </div>
    </div>
    <div className='text-center'>
    <p style={{color:'black'}}> &copy; Media Player 2024</p>
    </div>
    </div>
    </>
  )
}

export default Footer