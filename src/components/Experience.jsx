import React from 'react';
import { FaCloudversify } from 'react-icons/fa'; // Correct FontAwesome import
import { SiNestjs, SiAffinitydesigner } from 'react-icons/si';
import { LuListMusic } from 'react-icons/lu';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-info">
        <div className="grid">
          <div className="grid-card">
            <SiNestjs size={30} />
            <span>Front End Developer</span>
            <h3>6 months</h3>
            <p>
              Passionate about creating user-friendly and visually appealing web
              interfaces using modern technologies like React.js and Next.js.
            </p>
          </div>
          <div className="grid-card">
            <SiAffinitydesigner size={30} />
            <span>UI/UX Design</span>
            <h3>6 months</h3>
            <p>
              {' '}
              Experienced in designing intuitive and engaging user interfaces,
              ensuring seamless user experiences through creative design and
              functionality.
            </p>
          </div>
          <div className="grid-card">
            <FaCloudversify size={30} />
            <span>Cloud Developer</span>
            <h3>6 months</h3>
            <p>
              Skilled in cloud technologies with a focus on building scalable,
              secure, and efficient cloud-based applications using AWS and
              Azure.
            </p>
          </div>
          <div className="grid-card">
            <LuListMusic size={30} />

            <span>Musician</span>
            <h3>6 Year+</h3>
            <p>
              Experienced musician with over 6 years of playing the tabla and
              proficiency in various other instruments.
            </p>
          </div>
        </div>

        <img
          src="/images/work.png"
          alt="profile"
          width={600}
          //   height={620}
        />
      </div>
    </section>
  );
};

export default Experience;
