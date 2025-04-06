import React, { useEffect } from 'react';
import feather from 'feather-icons';

const Footer = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <footer className="footer">
      <div className="footer__parralax">
        <div className="footer__parralax-trees"></div>
        <div className="footer__parralax-moto"></div>
        <div className="footer__parralax-secondplan"></div>
        <div className="footer__parralax-premierplan"></div>
        <div className="footer__parralax-voiture"></div>
      </div>
      <div className="container">
        <div className="footer__columns">
          <div className="footer__col   footer__col--experience ">
            <h3 className="footer__col-title">
              <i data-feather="shopping-bag"></i> <span>Experiences</span>
            </h3>
            <nav className="footer__nav ">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  {/* <a href="" className="footer__nav-link"> */}
                  Front End Developer (6 months)
                  {/* </a> */}
                </li>
                <li className="footer__nav-item">
                  {/* <a href="" className="footer__nav-link"> */}
                  UI/UX Design (6 months)
                  {/* </a> */}
                </li>
                <li className="footer__nav-item">
                  {/* <a href="" className="footer__nav-link"> */}
                  Cloud Developer (6months)
                  {/* </a> */}
                </li>
                <li className="footer__nav-item">
                  {/* <a href="" className="footer__nav-link"> */}
                  Musician (Tabla + Other instruments, 6year +)
                  {/* </a> */}
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">
              <i data-feather="share-2"></i> <span>Socials</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a
                    href="https://www.youtube.com/@worldymelo"
                    className="footer__nav-link"
                  >
                    <i data-feather="youtube"></i>
                    <span>Youtube</span>
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a
                    href="https://www.facebook.com/share/15EZYUbKfn/?mibextid=wwXIfr"
                    className="footer__nav-link"
                  >
                    <i data-feather="facebook"></i>
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a
                    href="https://www.instagram.com/rimon_d_n/"
                    className="footer__nav-link"
                  >
                    <i data-feather="instagram"></i>
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a
                    href="https://www.linkedin.com/in/rimon-debnath-61249b1aa/"
                    className="footer__nav-link"
                  >
                    {/* <!-- https://feathericons.dev/?search=linkedin&iconset=feather --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      class="main-grid-item-icon"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect height="12" width="4" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>

                    <span>LinkedIN</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">
              <i data-feather="send"></i> <span>Contact</span>
            </h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <div className="footer__nav-link nn1">
                    <div>rimonok12@gmail.com</div>
                    {/* <div style={{ marginTop: '1.5rem' }}>
                      rimonok11@gmail.com
                    </div> */}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer__copyrights">
          <p>© All Rights Reserved | Rimon Deb Nath</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
