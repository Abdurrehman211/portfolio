// Portfolio.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Image2 from './images/about me.jpg';
import Image3 from './images/about me 2.jpg';
// import logo from './ angle-small-right.png';
// import logo1 from './ angle-small-left.png';
import Image4 from './images/Bootstraplogo.jpg';
import Image5 from './images/HTMLlogo.png';
import Image6 from './images/csslogo.jpg';
import Image1 from './images/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png';

function Portfolio() {
  const [imagePreview, setImagePreview] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className='portfolio'>
        <Inner imagePreview={imagePreview} handleImageChange={handleImageChange} isMenuOpen={isMenuOpen} />
      </div>
      <Aboutme />
      <Project />
      <CV />
    </div>
  );
}


function Inner({ imagePreview, handleImageChange, isMenuOpen }) {
  return (
    <>
      <section id='home'>
        <div className='main'>
          {!isMenuOpen && (
            <div className='child1'>
              {/* Wrap each letter of the name in a span with the class name-letter */}
              <span className="name-letter" data-letter="A">A</span>
              <span className="name-letter" data-letter="b">b</span>
              <span className="name-letter" data-letter="d">d</span>
              <span className="name-letter" data-letter="u">u</span>
              <span className="name-letter" data-letter="r">r</span>
              <span className="name-letter" data-letter=" "> </span> {/* Add space between words */}
              <span className="name-letter" data-letter="R">R</span>
              <span className="name-letter" data-letter="e">e</span>
              <span className="name-letter" data-letter="h">h</span>
              <span className="name-letter" data-letter="m">m</span>
              <span className="name-letter" data-letter="a">a</span>
              <span className="name-letter" data-letter="n">n</span>
              {/* Add more span elements for additional letters */}
            </div>
          )}
          <div className="col-121">
            <input type="file" accept="image/*" onChange={handleImageChange} id="upload" />
            <label htmlFor="upload" >
              <div className="image-container">
                {imagePreview ? (
                  <img className='Rimage' src={imagePreview} alt="Profile Image" />
                ) : (
                  <img className='Rimage' src={Image1} alt="Profile Image" />
                )}
              </div>
            </label>
          </div>
        </div>
      </section>
    </>
  );
}
function Aboutme() {

  return (
    <>
      <section id='aboutme'>
        <div className="main2">
          <h1><li>About Me</li></h1>
          <div className="child21">

            <div className="child211">
              <p className='aboutMeParagraph'>
                In the grand tapestry of life, I am an individual driven by an insatiable curiosity and an unwavering passion for knowledge and creativity. With every step along this journey, I immerse myself in the wonders of the world, constantly seeking to unravel its mysteries and contribute my own unique mark.
                <br /><br />
                At the core of my being lies an array of skills cultivated through years of dedication and perseverance. As a master of language and communication, I wield words with precision and finesse, crafting narratives that captivate minds and stir souls. My ability to articulate ideas with clarity and eloquence serves as a beacon, guiding others through the labyrinth of complexity towards enlightenment and understanding.
                <br /><br />
                In essence, I am more than just a collection of skills and experiences; I am a storyteller, a creator, a visionary. I am driven by a relentless pursuit of excellence and a steadfast belief in the power of human potential. And as I continue to traverse the vast expanse of existence, I invite you to join me on this extraordinary journey, where dreams become reality and the impossible becomes possible.
              </p>
            </div>
            <div className="child212">
              <img className='pic1' alt='profile pic' src={Image2} />
            </div>
          </div>
          <div className="child22">
            <div className="child221">
              <img className='pic2' alt='profile pic' src={Image3} />
            </div>
            <div className="child222">
              <p className='aboutMeParagraph'>
                I possess a versatile skill set spanning programming languages like Python, JavaScript, and Java, coupled with expertise in frameworks such as React and Django. Proficient in database management systems like SQL and MongoDB, I excel in problem-solving and collaboration, making me a valuable asset in diverse projects. Committed to continuous learning, I adapt swiftly to evolving landscapes, leveraging my skills to drive impactful solutions and contribute effectively to teams.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br /><br /><br /><br />
    </>
  )
}

function Project() {
  return (
    <>
      <section id='projects'>
        <div className="container1">
          <div className="headerdiv">
            <h1 className='projects'><li>Projects</li></h1>
          </div>
          <div className="maindiv" >
            <div className="card">
              <a href='http://127.0.0.1:5500/Assignments/Assignment2-1.html' target='_blank'>
                <img className='straplogo' src={Image4} alt="logo" />
                <div class="card-body">
                  <h1>Bootstrap</h1>
                  <p>This is a websites about the forms and how to make the site responsive
                    Bootstrap also includes a wide range of UI components, such as buttons, forms, navigation bars,
                    and carousels, which can be easily customized and styled using CSS classes. These components help
                    developers save time by providing ready-made solutions for common interface elements.
                  </p>
                </div>
              </a>
            </div>

            <div className="card">
              <a href='http://127.0.0.1:5500/Assignments/assignment4%20.html' target='_blank'>
                <img className='htmllogo' src={Image5} alt="logo" />
                <div class="card-body">
                  <h1>HTML</h1>
                  <p>This is a websites about the forms and all the way for the simple and elegant designing of
                    input fields interacting with each other
                    Overall, this HTML document serves as a template for generating a visually appealing and
                    informative certificate or mark sheet for students,
                    complete with customizable sections for entering marks and uploading images.
                  </p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href='http://127.0.0.1:5500/Assignments/assignment3-1.html' target='_blank'>
                <img className='csslogo' src={Image6} alt="logo" />
                <div class="card-body">
                  <h1>CSS</h1>
                  <p>Overall, the website serves as a comprehensive form for users planning to undertake
                    the Hajj pilgrimage, allowing them to input essential details and calculate the associated
                    costs conveniently. The combination of HTML, CSS,
                    and JavaScript facilitates an interactive and user-friendly experience for visitors</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <br /><br />
      </section>
    </>
  )
}
function CV() {
  return (
    <>
      <h1 className='projects'>Download the CV from here </h1>
      <div className="Container">
        <div className="text">
          <h2>My Resume !</h2>
        </div>
        <div className="text1">
          <p>
            In today's digital age, resumes are often submitted electronically, either through
            job portals or email attachments. It's essential to format the resume appropriately for
            digital viewing and ensure that it is compatible with
            applicant tracking systems (ATS) used by many employers to screen candidates.
          </p>
        </div>
      </div>
      <div className="container221">
        <a href="`https://docs.google.com/document/d/1QFxVnNX2mbz2_jcQlMDTBLLQY-e
_1ptQ/edit?usp=drive_link&ouid=117169181897020156693&rtpof
=true&sd=true`" download ><button className='download-button' id='cv'>Download CV</button></a>
      </div>
    </>
  )
}
export default Portfolio;
