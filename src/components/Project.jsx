import React from 'react';

const Project = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Recent Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src="./images/p1.png" alt="p1" />
          <h3>Hoo Bank</h3>
          <p>
            Hoo Bank is a modern web application built with Tailwind CSS and
            React, featuring sleek design and advanced functionalities.
          </p>
          <div className="btn-group">
            <a href="https://hoobank-modern-web.netlify.app/">
              <div className="button-85">Live Demo</div>
            </a>
            <a href="https://github.com/Rimonok12/Modern_Bank-HOOBANK.git">
              <div className="button-85">Github Repo</div>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src="/images/p2.png" alt="p2" />
          <h3>Zentry Gaming</h3>
          <p>
            Zentry is a dynamic gaming website built using Tailwind CSS and
            React, featuring modern functionalities for an enhanced user
            experience.
          </p>
          <div className="btn-group">
            <a href="https://rdn-awwardwinning.netlify.app/"></a>
            <div className="button-85">Live Demo</div>
            <a href="https://github.com/Rimonok12/awwardWinning.git">
              <div className="button-85">Github Repo</div>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src="/images/p4.png" alt="p3"></img>
          <h3>IMDB Clone</h3>
          <p>
            IMDB Clone is a project built with Tailwind CSS and React 19,
            featuring modern functionalities and utilizing the TMDB database API
            for movie data.
          </p>
          <div className="btn-group">
            <a href="https://snazzy-cactus-e705ea.netlify.app/">
              <div className="button-86">Live Demo</div>
            </a>
            <a href="https://github.com/Rimonok12/Movie_TMDB_reactjs19.git">
              <div className="button-85">Github Repo</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
