import "./App.css";
import "./Mediaqueries.css";
import React from "react";

function App() {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  return (
    <div>
      <img src="/jackpicpng.png" alt="Picture" />
    </div>
  )


  // return (
  //   <div>
  //     <nav id="desktop-nav">
  //       <div className="logo">Jack Miller</div>
  //       <div>
  //         <ul className="nav-links">
  //           <li>
  //             <a href="#about">{`<About />`}</a>
  //           </li>
  //           <li>
  //             <a href="#experience">{'<Experience />'}</a>
  //           </li>
  //           <li>
  //             <a href="#projects">{'<Projects />'}</a>
  //           </li>
  //           <li>
  //             <a href="#contacts">{'<Contact />'}</a>
  //           </li>
  //         </ul>
  //       </div>
  //     </nav>
  //     <nav id="hamburger-nav">
  //       <div className="logo">Jack Miller</div>
  //       <div className="hamburger-menu">
  //         <div className="hamburger-icon" onClick={toggleMenu}>
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //         </div>
  //         <div className="menu-links">
  //           <li>
  //             <a href="#about" onClick={toggleMenu}>
  //               About
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#experience" onClick={toggleMenu}>
  //               Experience
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#projects" onClick={toggleMenu}>
  //               Projects
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#contacts" onClick={toggleMenu}>
  //               Contact
  //             </a>
  //           </li>
  //         </div>
  //       </div>
  //     </nav>
  //     <section id="profile">
  //       <div className="section__pic-container">
  //         <img src="/jackpicpng.png" alt="picture" />
  //       </div>
  //       <div className="section__text">
  //         <p className="section__text__p1">Hello, I am</p>
  //         <h1 className="title"> Jack Miller,</h1>
  //         <p className="section__text__p2">Frontend Web Developer</p>
  //         <div className="btn-container">
  //           <button
  //             className="btn btn-colour-2"
  //             onClick={() => window.open(resumeexample)}
  //           >
  //             Download CV
  //           </button>
  //           <button
  //             className="btn btn-colour-2"
  //             onClick={() => (window.location.href = "#contact")}
  //           >
  //             Contact
  //           </button>
  //         </div>
  //         <div className="socials-container">
  //           <img
  //             className="linkedin"
  //             src={linkedin}
  //             alt="LinkedIn"
  //             className="icon"
  //             onClick={() =>
  //               (window.location.href =
  //                 "https://www.linkedin.com/in/your-profile")
  //             }
  //           />
  //           <img
  //             className="github"
  //             src={github}
  //             alt="Github"
  //             className="icon"
  //             onClick={() =>
  //               (window.location.href = "https://github.com/jdm1991")
  //             }
  //           />
  //         </div>
  //       </div>
  //       <div className="vertical1"><p> examplemail@outlook.com</p></div>
  //       <img
  //         className="icon-arrow1"
  //         src={arrow}
  //         alt="Arrow"
  //         onClick={() => (window.location.href = "#about")}
  //       />
  //     </section>
  //     <section id="about">
  //       <div>
  //         <p className="section__text__p1">Get to know more</p>
  //         <h1 className="about-title">About Me</h1>
  //       </div>
  //       <div className="section-container">
  //         <div className="section__pic-container">
  //           <img
  //             className="aboutPic"
  //             src={jackpicpng}
  //             alt="picture"
  //           />
  //         </div>
  //         <div className="about-details-container">
  //           <div className="about-containers">
  //             <div className="details-container">
  //               <img className="icon" src={experience} alt="experience icon" />
  //               <h3>Experience</h3>
  //               <p>
  //                 2+ years <br />
  //                 Frontend Development
  //               </p>
  //             </div>
  //             <div className="details-container">
  //               <img className="icon" src={education} alt="education icon" />
  //               <h3>Education</h3>
  //               <p>
  //                 {" "}
  //                 Boolean Coding Academy Graduate <br />
  //                 Fullstack Web Development
  //               </p>
  //             </div>
  //           </div>
  //           <div className="text-container">
  //           <p>
  //             I am a 33-year-old front-end web developer, passionate about creating intuitive and user-friendly digital experiences. My professional journey is fueled by dedication, a fast-learning approach, and a continuous pursuit of knowledge. With a strong focus on clean, accessible, and responsive design, I am skilled in various front-end technologies. Balancing a fulfilling family life as a devoted husband and father, I bring empathy and effective time management to my work. I am enthusiastic about collaborating on innovative, user-centric web solutions and would love to connect and bring your creative visions to life.
  //           </p>

  //           </div>
  //         </div>
  //       </div>
  //       <div className="vertical2"><p> Available on a fulltime, part time, or freelance basis.</p></div>
  //       <img
  //         className="icon-arrow2"
  //         src={arrow}
  //         alt="Arrow"
  //         onClick={() => (window.location.href = "#experience")}
  //       />
  //     </section>
  //     <section id="experience">
  //     <div>
  //         <p className="section__text__p1">Explore my</p>
  //         <h1 className="title">Experience</h1>
  //       </div>
  //       <div className="experience-details-container">
  //         <div className="about-containers">
  //           <div className="details-container">
  //             <h2 className="experience-sub-title">Frontend Tech Stack</h2>
  //             <div className="article-container">
  //               <article>
  //                 <img className='coding-icons' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt="HTML"/>
  //                 <div>
  //                   <h3>HTML</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //               <article>
  //                 <img className="coding-icons" src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" alt="CSS" />
  //                 <div>
  //                   <h3>CSS</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //               <article>
  //                 <img className="coding-icons" src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="React"/>
  //                 <div>
  //                   <h3>React.JS</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //               <article>
  //                 <img className="coding-icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="JavaScript" />
  //                 <div>
  //                   <h3>JavaScript</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //               <article>
  //                 <img className="coding-icons" src="data:image/png;base64,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" alt="Node" />
  //                 <div>
  //                   <h3>Node.JS</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //               <article>
  //                 <img className="coding-icons" src="https://www.svgrepo.com/show/303535/visual-studio-code-logo.svg" alt="VSCode" />
  //                 <div>
  //                   <h3>VS Code</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //               <article>
  //                 <img className="coding-icons" src="https://icons.veryicon.com/png/o/application/skills-section/bootstrap-2.png" alt="Bootstrap" />
  //                 <div>
  //                   <h3>Bootstrap</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //               <article>
  //                 <img className="coding-icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png" alt="PS" />
  //                 <div>
  //                   <h3>Photoshop</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //               <article>
  //                 <img className="coding-icons" src="https://www.svgrepo.com/show/354521/vitejs.svg" alt="vite" />
  //                 <div>
  //                   <h3>ViteJS</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //             </div>
  //           </div>
  //           <div className="details-container">
  //             <h2 className="experience-sub-title">Backend Tech Stack</h2>
  //             <div className="article-container">
  //               <article>
  //                 <img className="coding-icons" src= "https://p7.hiclipart.com/preview/396/90/545/postgresql-database-logo-computer-icons-replication-software-developer.jpg" alt="Postgres" />
  //                 <div>
  //                   <h3>PostgreSQL</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //               <article>
  //                 <img className="coding-icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="JavaScript" />
  //                 <div>
  //                   <h3>Express JS</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //               <article>
  //                 <img className="coding-icons" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" />
  //                 <div>
  //                   <h3>Git</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //               <article>
  //                 <img className="coding-icons" src="https://www.svgrepo.com/show/354210/prisma.svg" alt="Prisma" />
  //                 <div>
  //                   <h3>Prisma</h3>
  //                   <p>Experienced</p>
  //                 </div>
  //               </article>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="vertical3"><p> Get in touch today</p></div>
  //       <img
  //         className="icon-arrow"
  //         src={arrow}
  //         alt="Arrow"
  //         onClick={() => (window.location.href = "#projects")}
  //       />
  //     </section>
  //     <section id="projects">
  //     <div>
  //         <p className="section__text__p1">Browse my recent</p>
  //         <h1 className="title">Projects</h1>
  //       </div>
  //       <div className="experience-details-container">
  //         <div className="about-containers">
  //           <div className="details-container colour-container">
  //             <div className="article-container">
  //               <img className="project-img" src={project1} alt="project1" />
  //             </div>
  //             <h2 className="experience-sub-title project-title">Project 1</h2>
  //             <div className="btn-container">
  //               <button
  //                 className="btn btn-colour-2 project-btn"
  //                 onClick={() => (window.location.href = "https://github.com")}
  //               >
  //                 Github
  //               </button>
  //             </div>
  //             <div className="btn-container">
  //               <button
  //                 className="btn btn-colour-2 project-btn"
  //                 onClick={() => (window.location.href = "https://github.com")}
  //               >
  //                 Live Demo
  //               </button>
  //             </div>
  //           </div>
  //           <div className="details-container colour-container">
  //             <div className="article-container">
  //               <img className="project-img" src={project1} alt="project1" />
  //             </div>
  //             <h2 className="experience-sub-title project-title">Project 2</h2>
  //             <div className="btn-container">
  //               <button
  //                 className="btn btn-colour-2 project-btn"
  //                 onClick={() => (window.location.href = "https://github.com")}
  //               >
  //                 Github
  //               </button>
  //             </div>
  //             <div className="btn-container">
  //               <button
  //                 className="btn btn-colour-2 project-btn"
  //                 onClick={() => (window.location.href = "https://github.com")}
  //               >
  //                 Live Demo
  //               </button>
  //             </div>
  //           </div>
  //           <div className="details-container colour-container">
  //             <div className="article-container">
  //               <img className="project-img" src={project1} alt="project1" />
  //             </div>
  //             <h2 className="experience-sub-title project-title">Project 3</h2>
  //             <div className="btn-container">
  //               <button
  //                 className="btn btn-colour-2 project-btn"
  //                 onClick={() => (window.location.href = "https://github.com")}
  //               >
  //                 Github
  //               </button>
  //             </div>
  //             <div className="btn-container">
  //               <button
  //                 className="btn btn-colour-2 project-btn"
  //                 onClick={() => (window.location.href = "https://github.com")}
  //               >
  //                 Live Demo
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <img
  //         className="icon-arrow4"
  //         src={arrow}
  //         alt="Arrow"
  //         onClick={() => (window.location.href = "#contacts")}
  //       />
  //     </section>
  //     <section id="contacts">
  //      <div>
  //         <p className="section__text__p1">Get In Touch Today</p>
  //         <h1 className="title">Contact Me</h1>
  //       </div>
  //       <div className="contact-info-upper-container">
  //         <div className="contact-info-container">
  //           <img className="icon contact-icon email-icon" src={email} alt="email" />
  //           <a className="email" href="mailto:examplemail.com">example@gmail.com</a>
  //         </div>
  //         <div className="contact-info-container">
  //           <img className="icon contact-icon" src={linkedin} alt="linkedin" />
  //           <a className="email" href="https://linkedin.com">Linkedin</a>
  //         </div>
  //       </div>
  //     </section>
  //     <footer>
  //       <nav id="footer" >
  //         <div className="nav-links-container">
  //           <ul className="nav-links2">
  //           <li>
  //             <a className="links2a" href="#about">{`<About />`}</a>
  //           </li>
  //           <li>
  //             <a className="links2a" href="#experience">{'<Experience />'}</a>
  //           </li>
  //           <li>
  //             <a className="links2a" href="#projects">{'<Projects />'}</a>
  //           </li>
  //           <li>
  //             <a className="links2a" href="#contacts">{'<Contact />'}</a>
  //           </li>
  //           </ul>
  //         </div>
  //       </nav>
  //       <p className="footer-p" >Copyright &#169; 2024 Jack Miller. All Rights Reserved.</p>
  //     </footer>
  //   </div>
  // );
}
export default App;
