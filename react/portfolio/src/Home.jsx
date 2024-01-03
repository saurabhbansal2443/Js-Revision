import React from 'react';
import "./HomeStyle.css"
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div className='mainContainer'>
      <div className="textPart" style={{fontSize:"2rem" , fontWeight:"500"}}>
        <main class="container" style={{ height:"25%"}}>
          <p>Hello 👋 I'm <br />
          Saurabh Bansal</p>
          <section class="animation">
            <div class="first"><div> Youtuber </div></div>
            <div class="second"><div>Web Developer</div></div>
            <div class="third"><div>Systems Engineer</div></div>
          </section>
        </main>
        <div className="aboutMe">
          <Link to="/about"> <button type="button" className="btn btn-warning btn-lg glow">AboutMe</button> </Link>
        </div>
        <div className="socialCircle">
          <a target="_blank" href="https://github.com/saurabhbansal2443" className="logoAnchor"><img className="logo" src="../assets/github.svg"></img></a>
          <a target="_blank" href="https://github.com/saurabhbansal2443" className="logoAnchor"><img className="logo" src="../assets/instagram (1).svg"></img></a>
          <a target="_blank" href="https://www.linkedin.com/in/saurabhbansal1301/" className="logoAnchor"><img className="logo" src="../assets/linkedin.svg"></img></a>
          <a target="_blank" href="https://github.com/saurabhbansal2443" className="logoAnchor"><img className="logo" src="../assets/telegram.svg"></img></a>
          <a target="_blank" href="https://github.com/saurabhbansal2443" className="logoAnchor"><img className="logo" src="../assets/twitter.svg"></img></a>
        </div>
      </div>
      <div className="avatarPart">
        <img src="../assets/avatar.jpeg" className="avatar"></img>
      </div>
    </div>
  )
}

export default Home