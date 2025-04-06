import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Fixed image path - public folder is automatically served at the root */}
        <img
          src="/images/profile.png"
          alt="profile"
          width="auto"
          //   height={620}
        />
        <div className="info-box">
          <div className="text">
            <h3 className="special-font">Hi, I&apos;m</h3>
            <h1 className="h1name">Rimon Deb Nath</h1>
            <span>Full Stack Developer</span>
          </div>
          <div className="btn-group">
            {/* <!-- HTML !--> */}
            <a href="/rimonCV-2025.pdf" download>
              <button className="button-85 btn" role="button">
                Download CV
              </button>
            </a>

            {/* <button className="btn"></button> */}
            {/* <button className="btn button-86">Contact</button> */}
          </div>

          <div className="button-container socials ">
            <a
              href="https://www.facebook.com/share/15EZYUbKfn/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <div className="glass-btn blue-btn">
                {/* Facebook Button */}
                <img
                  src="https://i.postimg.cc/DwbWDQTx/facebook.png"
                  alt="Facebook"
                  style={{ width: '5.5em' }}
                />
              </div>
            </a>
            <a
              href="https://www.youtube.com/@worldymelo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <div className="glass-btn red-btn">
                {/* YouTube Button */}
                <img
                  src="https://i.postimg.cc/LstJ4Hhf/youtube.png"
                  alt="YouTube"
                  style={{ width: '6em' }}
                />
              </div>
            </a>
          </div>

          {/* <div className="socials">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon className="icon-1" icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon className="icon-1" icon={faLinkedin} />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;

// 15:56
