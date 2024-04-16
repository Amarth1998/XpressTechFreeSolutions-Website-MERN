import React from "react";
// import { Analytics } from "../components/Analytics"; 

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>The world is one family</p>
              <h1>
                Welcome 
              </h1>
              <p>
              Here, I offer IT consultation and provide notes on various technologies including Node.js, Express.js, React.js, MongoDB, JavaScript, Python, Django, C++,STL,AWS,SQL,HTML, CSS, and Data Structures & Algorithms (DSA). <br />
              Whether you're a beginner or an aspiring full-stack developer, you'll find resources and insights to enhance your understanding and skills in these technology domains. <br />
              <span style={{color:"#dc143c"}}>Get notes for free after registration </span> 
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn ">connect now</button>
                </a>
                <a href="/register">
                  <button className="btn secondary-btn">Get Notes</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/002.jpg"
                alt="coding together" 
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}

      {/* <Analytics /> */}

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/001.jpeg"
              alt="coding together" style={{width:"50%"}}
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/login">
                <button className="btn secondary-btn">Get Notes</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
