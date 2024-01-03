import React from 'react';
import "./HomeStyle.css"

const Home = () => {
  return (
    <div className='mainContainer'>
      <div className="textPart" style={{fontSize:"2rem" , fontWeight:"500"}}>
        <main class="container">
          <p>Hello 👋 I'm <br />
          Saurabh Bansal</p>
          <section class="animation">
            <div class="first"><div> </div></div>
            <div class="second"><div>Web Developer</div></div>
            <div class="third"><div>Systems Engineer</div></div>
          </section>
        </main>
        <div className="aboutMe">
          <button type="button" className="btn btn-warning btn-lg glow">AboutMe</button>
        </div>
        <div className="socialCircle">
          <img className="logo" src="../assets/github.svg"></img>
          <img className="logo" src="../assets/instagram (1).svg"></img>
          <img className="logo" src="../assets/linkedin.svg"></img>
          <img className="logo" src="../assets/telegram.svg"></img>
          <img className="logo" src="../assets/twitter.svg"></img>
        </div>
      </div>
      <div className="avatarPart">
        <img src="../assets/avatar.jpeg" className="avatar"></img>
      </div>
    </div>
  )
}

export default Home