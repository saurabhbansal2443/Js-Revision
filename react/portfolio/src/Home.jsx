import React from 'react';
import "./HomeStyle.css"

const Home = () => {
  return (
    <div className='mainContainer'>
      <div className="textPart">
        <div className="textIn"> <h1>Hey, I am <br />   Saurabh Bansal  </h1>
        <h1> I am a Software Developer </h1>
        </div>
        <div className="aboutMe">
        <button type="button" className="btn btn-warning">AboutMe</button>
        </div>
        <div className="socialCircle">
        <img className="logo"src="../assets/github.svg"></img>
        <img className="logo"src="../assets/instagram (1).svg"></img>
        <img className="logo"src="../assets/linkedin.svg"></img>
        <img className="logo"src="../assets/telegram.svg"></img>
        <img className="logo"src="../assets/twitter.svg"></img>
        </div>
      </div>
      <div className="avatarPart">
        <img src="../assets/avatar.jpeg" className="avatar"></img>
      </div>
    </div>
  )
}

export default Home