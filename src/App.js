import React from 'react';
import './App.css';

const style1 = {
  fontsize: '36px',
  color: 'blue',
};

const style2 = {
  fontsize: '36px',
  color: 'blue',
};

const App = () => {
  return (
    <div class="container container-border">
      <h1 class="text-center">Curriculum Vitae</h1>
      <hr class="line-header" />

      <i style={style1} class='fas'>&#xf5d1; Objective</i>
      <p>Seeking employment in the computer engineering field or computer science field where I may utilize my strong
      analytical abilities, communication skills, and initiative traits to provide exceptional assistance to the
      organization while gaining experience.</p>
      {/*<p>You can download a hard copy of my resume right here: </p>
      <a type="button" class="btn btn-primary" href="https://app.rezi.io/s/09aroDdgsFPTAWV3LLwB">Resume</a>*/}
      <hr />

      <i style={style1} class='fas'>&#xf19d; Education</i>
      <h2>California State University, Bakersfield</h2>
      <h4>Bachelor of Science (B.S.) - Computer Engineering</h4>
      <h4>Minor - Computer Science</h4>
      <i style={style2} class='fas'>&#xf133; September 2012 - December 2017</i>
      <hr />

      <i style={style1} class='fas'>&#xf108; Coursework</i>
      <h2>Computer Engineering: </h2>
      <p>&#9632; Introduction to Unix &#9632; Programming Fundamentals &#9632; Data Structures and Algorithms &#9632;
      Electric Circuits &#9632;
      Assembly Language Programming &#9632; Digital Circuits &#9632; Embedded Systems &#9632; Discrete Structures
      &#9632; Analog Circuits &#9632; Digital
      Design with VHDL &#9632; Instrucmentaion Control and Data Acquistion</p>
      <h2>Computer Science: </h2>
      <p>&#9632; Object-Oriented Programming &#9632; Internet Programming and Web Design &#9632; Server Scripting
      Languages &#9632;
      Digital Forensics &#9632;
      Web Programming I</p>
      <h2>Udemy: </h2>
      <p>&#9632; Modern React with Redux [2019 Update] &#9632; JavaScript: Understanding the Weird Parts &#9632; Advanced
      JavaScript &#9632; Git Complete: The definitive, step-by-step guide to Git &#9632; AutoCAD 2D and 3D practice
      drawings</p>
      <hr />

      <i style={style1} class='fas'>&#xf508; Experience</i>
      <h2>Seasonal Warehouse Worker</h2>
      <h4>Target</h4>
      <i style={style2} class='fas'>&#xf133; August 2020 - Present</i>
      <ul>
        <li>Working in the Outbound Department where I load trailers with packages to be delivered to the stores.</li>
      </ul>
      <h2>Web Developer</h2>
      <h4>Self Employed - Freelance</h4>
      <i style={style2} class='fas'>&#xf133; July 2018 - August 2020</i>
      <ul>
        <li>Develop websites for clients using HTML, CSS, JavaScript, and PHP.</li>
      </ul>
      <h2>Animal Sitter</h2>
      <h4>Fording Family - Freelance</h4>
      <i style={style2} class='fas'>&#xf133; August 2009 - March 2020</i>
      <ul>
        <li>Entrusted to care for family pets on a weekly basis.</li>
        <li>Demonstrated great customer service by providing companionship and comfort for the pets.</li>
      </ul>
      <h2>Frontend Web Developer</h2>
      <h4>Taco Pronto - Freelance</h4>
      <i style={style2} class='fas'>&#xf133; January 2015 - December 2018</i>
      <ul>
        <li><a href="https://www.tacoprontotogo.com/">Website</a></li>
        <li>Helped the design and layout of company website and would update the prices and menu of company website when
        needed.</li>
      </ul>
      <hr />

      <i style={style1} class='fas'> &#xf121; Skills</i>
      <h2>Programming Languages: </h2>
      <p>&#9632; C++ &#9632; HTML &#9632; CSS &#9632; JavaScript &#9632; PHP &#9632; Git &#9632; React (Beginner) &#9632;
      LATEX</p>
      <h2>Software: </h2>
      <p>&#9632; NI Multisim &#9632; LabVIEW &#9632; SPICE Software &#9632; MATLAB &#9632; MobaXterm &#9632; SketchUp
      &#9632; AutoCAD</p>
      <h2>Laboratory: </h2>
      <p>&#9632; FPGA Board &#9632; NI Elvis II &#9632; Multimeter &#9632; Arduino UNO &#9632; Soldering &#9632; 3D
      Printer</p>
      <hr />

      <i style={style1} class='fas'> &#xf126; Projects</i>
      <p>A list of my projects can be found in my portfolio.</p>
      <a type="button" class="btn btn-primary" href="https://github.com/jgarcia45 ">Portfolio</a>
      <hr class="line-header" />
    </div>
  );
};

export default App;