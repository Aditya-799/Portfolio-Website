import {useState} from 'react'
import {ReactTyped} from 'react-typed'
import axios from 'axios'
import './App.css'

function App(){
  let [isClicked,setClick]=useState(false)
  let [Activeoption,setActiveoption]=useState('Home')
  let [formData,setFormData]=useState({
    name:'',
    email:'',
    message:''
  })
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const changeOption=(option)=>{
    setActiveoption(option)
    setClick(false)
    console.log(option)
  }
  const menuClick=()=>{
    setClick(prev=> !prev)
  }
  function downloadResume() {
    const link = document.createElement('a');
    link.href = '/myresume.pdf';  // Make sure this is correct
    link.download = 'Aditya Reddy Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const sendEmail=()=>{
    if(formData.name==='' || formData.email==='' || formData.message===''){
      alert('Please fill all the fields')
    }else{
      axios.post('http://localhost:5000/send-email',formData)
      .then(()=>{
        alert('Email sent successfully')
      })
      .catch(()=>{
        alert('Error sending email')
      })
    }
  }

  return (
    <div className="bg-container">
      <div className="inner-container">
        <div className="top-section" id='top-section'>
          <h1 className="name role-style">Aditya Reddy</h1>
          <div className="menu-bar-container">
          {isClicked===false ?<i className="fa-solid fa-bars menu-bar" onClick={menuClick}></i>:
          <i className="fa-solid fa-xmark menu-bar" onClick={menuClick}></i>}
          </div>
          <div className="lg-menu-bar-container">
          <ul className="">
              <li onClick={()=>changeOption('Home')}><a href="#top-section" className='lg-sections'>Home</a></li>
              <li onClick={()=>changeOption('About')}><a href="#aboutme-section" className='lg-sections'>About</a></li>
              <li onClick={()=>changeOption('My Journey')}><a href="#skill-section" className='lg-sections'>My Journey</a></li>
              <li onClick={()=>changeOption('Contact')}><a href="#contact-section" className='lg-sections'>Contact</a></li>
            </ul>
          </div>
        </div>
        {isClicked ? (
            <ul className="">
              <li className='sections' onClick={()=>changeOption('Home')}><a href="#top-section" className='close-link'>Home</a></li>
              <li className='sections' onClick={()=>changeOption('About')}><a href="#aboutme-section" className='close-link'>About</a></li>
              <li className='sections' onClick={()=>changeOption('My Journey')}><a href="#skill-section" className='close-link'>My Journey</a></li>
              <li className='sections' onClick={()=>changeOption('Contact')}><a href="#contact-section" className='close-link'>Contact</a></li>
            </ul>
          ):'' 
          }
          <div className='image-section'>
            <div className='image-container'>
            <img src="profile-image.jpg" className="image"/>
            </div>
            <div className='intro-container'>
            <h1 className="role">Full Stack <span className="role-style">Developer</span></h1>
            <ReactTyped 
            strings={[
              'Tech Enthusiast',
              'Artificial Intelligence and Data Science Student',
              'Full Stack Developer'
            ]}
            backSpeed={200}
            typeSpeed={300}
            loop
            className="animation-effect"
            />
            <p className='motive'>I love turning ideas into scalable web apps.</p>
            </div>
          </div>
          <div className='Aboutme' id='aboutme-section'>
              <h1 className="about-me-heading role-style">About Me</h1>
              <p className='about-me-desc'>I'm a B.Tech student in Artificial Intelligene and Data Science at VIIT, Vizag. Passionate about Fullstack development,Devops 
              I build projects that solve real-world problems and enjoy learning new technologies daily.
              </p>
              <div className='button-container'>
              <button className='button-style download-button' onClick={downloadResume}>
                <i className="fa-solid fa-file-lines in-icon"></i> My Resume
              </button>
              <button className='button-style View-project-button'><i className="fa-solid fa-code in-icon"></i> <a href="#projects-section" className='close-link button-color'>View Projects</a></button>
              </div>
          </div> 
          <div className='Skill-section' id='skill-section'>
            <h1 className="skills-heading role-style">
              Technical Skills
            </h1>
            <ul className="skills-container">
              <li className="skill-item-container">
                <img src='/html5.png' className='skill-image'/>
                <p className='skill-name'>HTML</p>
              </li>
              <li className="skill-item-container">
                <img src='/css.png'/>
                <p className='skill-name'>CSS</p>
              </li>
              <li className="skill-item-container">
                <img src='/js.png'/>
                <p className='skill-name'>JS</p>
              </li>
              <li className="skill-item-container">
                <img src='/nodejs.png'/>
                <p className='skill-name'>NODE JS</p>
              </li>
              <li className="skill-item-container">
                <img src='/icons8-express-js-96.png'/>
                <p className='skill-name'>EXPRESS JS</p>
              </li>
              <li className="skill-item-container">
                <img src='/reactjs.png'/>
                <p className='skill-name'>REACT JS</p>
              </li>
              <li className="skill-item-container">
                <img src='/ts.png'/>
                <p className='skill-name'>TYPESCRIPT</p>
              </li>
              <li className="skill-item-container">
                <img src='/sqlite.png'/>
                <p className='skill-name'>SQ LITE</p>
              </li>
              <li className="skill-item-container">
                <img src='/mongodb.png'/>
                <p className='skill-name'>MONGO DB</p>
              </li>
              <li className="skill-item-container">
                <img src='/python.png'/>
                <p className='skill-name'>PYTHON</p>
              </li>
              <li className="skill-item-container">
                <img src='/git.png'/>
                <p className='skill-name'>GIT</p>
              </li>
              <li className="skill-item-container">
                <img src='/github.png'/>
                <p className='skill-name'>GIT HUB</p>
              </li>

            </ul>
          </div>
          <div className="projects-section Skill-section" id='projects-section'>
          <h1 className="skills-heading role-style">
              Projects
          </h1>
          <ul className="projects-container">
            <li className="project-container">
              <img src="nxttrendz-image.jpg" className='show-project-image'/>
              <h2 className='project-name'>Nxttrendz</h2>
              <p className='project-desc'>A user-centric e-commerce platform with advanced filters, featuring seperate designs for Prime and Non-Prime users.<br/>
                Prime //Username:rahul/rahul@2021 <br/>
                Non-Prime //Username:raja/raja@2021
              </p>
              <a href="https://nxtadiecom.ccbp.tech/login" target="_blank" className='link'>Live Demo <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
            </li>
            <li className="project-container">
              <img src="JobbyApp.png" className='show-project-image'/>
              <h2 className='project-name'>Jobby App</h2>
              <p className='project-desc'>Full fledged Job portal with  User and Admin panels, Users can upload resumes and apply for jobs, while Admins can manage job listings and user applications.
              </p>
              <a href="https://github.com/Aditya-799/Jobby-Full-Stack-Web-App" target="_blank" className='link'>Git Demo <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
            </li>
            <li className="project-container">
              <img src="Moneymanager.png" className='show-project-image'/>
              <h2 className='project-name'>Money Manager</h2>
              <p className='project-desc'>A personal finance management app that helps users track their income and expenses, providing insights into their spending habits and financial health.
              </p>
              <a href="https://money-manager-app-murex.vercel.app/" target="_blank" className='link'>Live Demo <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
            </li>
            <li className="project-container">
              <img src="Todo-app.png" className='show-project-image'/>
              <h2 className='project-name'>Todo Application</h2>
              <p className='project-desc'>A simple and intuitive todo application that allows users to manage their tasks efficiently with features like adding, deleting, and marking tasks as completed.
              </p>
              <a href="https://test10.ccbp.tech/" target="_blank" className='link'>Live Demo <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
            </li>
            <li className="project-container">
              <img src="Matchgame.png" className='show-project-image'/>
              <h2 className='project-name'>Match Game</h2>
              <p className='project-desc'>
              An engaging match game that challenges users to find matching pairs of cards within a time limit, enhancing memory and concentration skills.
              </p>
              <a href="https://matchgame-9apm.vercel.app/" target="_blank" className='link'>Live Demo <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
            </li>
          </ul>
          </div>
          <div className='contact-section' id='contact-section'>
            <h1 className='contact-heading role-style'>Let's Work Together</h1>
            <p className='contact-desc about-me-desc'>I'm always excited to connect with fellow developers and explore new opportunities.</p>
            <div className='contact-container'>
              <input type='text' placeholder='Your Name' className='contact-input' onChange={handleChange} name='name' value={formData.name} required />
              <input type='email' placeholder='Your Email' className='contact-input' onChange={handleChange} name='email' value={formData.email} required />
              <textarea placeholder='Your Message' className='contact-input-desc' cols='20' rows='8' onChange={handleChange} name='message' value={formData.message} required />
              <div className='contact-button-container'>
                <button className='button-style contact-button download-button' onClick={sendEmail}>Send Message</button>
              </div>
              <p style={{color:'white'}}>The Nodemailer is not working in the render due to blockage of smtp services.Connect via Linked In</p>
            </div>
            <div className='contact-prefer-linkedIn-container'>
              <h1 className='contact-prefer-linkedIn-heading role-style'>Prefer Linkedin?</h1>
              <p className="prefer-linkedIn-desc about-me-desc">Connect with me on LinkedIn for professional networking and oppurchunities.</p>
              <button className='button-style linkedin-connect-button'><i className="fa-brands fa-linkedin-in in-icon"></i> Connect on LinkedIn</button>
              <button className='button-style linkedin-connect-button'><i className="fa-brands fa-github in-icon"></i> Connect via GitHub</button>
              <button className='button-style linkedin-connect-button'><img src="gmail.png" className='gmail-icon in-icon'/> Connect via Gmail</button>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
