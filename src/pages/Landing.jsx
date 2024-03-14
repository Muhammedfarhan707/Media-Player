import React from "react";
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Landing() {
  return (
    <>
      <div className='container1'>
        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
          <div className='row p-5 shadow'>
            <div className='col d-flex flex-column justify-content-center'>
              <h3 style={{ color: '#436850', textAlign:'center' }}>Media player 2024</h3>
              <p className='description'>Unleash Your Entertainment: Stream, Organize, and Rediscover with <b>Media Player:2024</b>
                Media Player 2024 is your one-stop shop for a seamless and personalized video experience. Whether you're a movie buff, a music enthusiast, or simply enjoy catching up on the latest online content, we offer the perfect platform to:

                1. Upload and Organize
                
                
                2. Immerse Yourself
                
                
                3. Relive the Magic & Track your viewing history</p>
              <Link to={'./>Dashboard'} className='btn1 p-2' style={{ textAlign: 'center' }}>EXPLORE</Link>
            </div>
            <div className='col d-flex'>
              <img src="https://source.unsplash.com/1600x800/?music" className='img-fluid shadow' style={{border: '2px solid white' }} alt="image not found" />
            </div>
          </div>
        </div>
      </div>

      {/*FEATURES SECTION*/}
      <div className='container1  p-5'>
        <h3 className='text-center' style={{ color: '#436850' }} > Features</h3>
        <div className='d-flex mt-2 flex-row justify-content-evenly'>

          <div className="card" style={{ width: '18rem' }}>
            <img src="https://1.bp.blogspot.com/-0tNF44o1lgg/YLYj5a9l_PI/AAAAAAAABdg/m0wUG91xxxIkB_qK6wvqAjnZN8dlhYAMACNcBGAsYHQ/w400-h300/5.gif" className="card-img-top" style={{ heigh: '300px' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">UPLOAD VIDEOS</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>

          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://media.giphy.com/media/hOG63LX4cb8A0/giphy.gif" className="card-img-top" style={{ heigh: '300px' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">WATCH VIDEOS</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://cdn.dribbble.com/users/35723/screenshots/5683618/icon_preview_gif_dribble.gif" className="card-img-top" style={{ heigh: '300px' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">VIEW HISTORY</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

{/*SIMPLE,FAST & SECUE SECTION*/}
        <div className='mt-5 d-flex justify-content-between flex-row align-items-center p-5'>
          <div className='col'>
            <h2 style={{textAlign:'center'}}>Simple, Faster & Secure</h2>
            <p style={{textAlign:'justify'}}>Gone are the days of struggling with complex media players that bog down your viewing experience. Introducing [Your Media Player Name], the simple, fast, and secure solution for all your entertainment needs.Effortless Navigation: Our intuitive interface is designed for everyone, from tech-savvy users to those just starting their digital journey. Find your favorite movies, shows, and videos with ease, and navigate through the player with intuitive controls.

Uninterrupted Playback: Say goodbye to buffering delays and frustrating interruptions. [Your Media Player Name] delivers lightning-fast streaming so you can immerse yourself in your content without any hiccups.</p>
          </div>

          <div className='col d-flex p-5'>
            <iframe width="670" height="400" src="https://www.youtube.com/embed/vrxMhAmSvyM?si=SmhECx1zmaIbSUXm" style={{border:'2px solid white'}} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </div>

      </div>
    </>
  )
}

export default Landing