import React from 'react'
import { NavLink } from "react-router-dom";
import { Analytics } from '../components/Analytics';
import { useAuth } from '../store/auth';
const About = () => {

  const {user}=useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>
                Welcome  {user ? `${user.username} hope you are well  `:`to our website`}
                
              </p>
              <p>Hello! My name is Amarsh Patel, and I hail from India. I am not only a seasoned chemical engineer but also a passionate full-stack developer with expertise in a diverse range of technologies. <br /> Over the years, I have honed my skills in Node.js, Express.js, React.js, MongoDB, JavaScript, Python, Django, C++, STL, AWS, SQL, HTML, CSS, and Data Structures & Algorithms (DSA).

In addition to my technical prowess, I thrive on tackling complex problems and implementing innovative solutions. I have a keen interest in leveraging technology to streamline processes and enhance user experiences. My dual background in engineering and software development equips me with a unique perspective that blends analytical thinking with creative problem-solving.

</p>
             
              <div className="btn btn-group">
                <a href="https://github.com/Amarth1998" target="_blank"><button className="btn">Github </button></a>
                  <a href="https://www.linkedin.com/in/amarth-patel-58712b185/"><button className="btn secondary-btn" target="_blank">Linkedin</button></a>
                
                
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/002.jpg"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
{/* <Analytics/>  */}
     
    </>
  );
};


export default About
