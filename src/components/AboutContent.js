import { Link } from "react-router-dom"
import "./AboutContent.css"

import React from 'react'
import react2 from "../assets/edu.png"
import exp from "../assets/exp.png"
import arrow from "../assets/mar.png"
import i_img from '../assets/2nd.jpg'
import About from "../routes/About"
import mar from "../assets/mm.png"


const AboutContent = () => {
    return ( 
    <div>
        <section id="about">
            <p className="section_text_p1">Get To Know More</p>
            <h1 className="title">About me</h1>
            <div className="cont" id="target">
                <div className="pic_container_section">
                    <img
                        src={i_img}
                        alt="profile_pic"
                        className="about-pic"
                    />
                </div>
                <div className="about_detail_container">
                    <div className="about-containers">

                        <div className="details_container">
                            <Link to="/about">  <img
                                src={exp}
                                alt="experience_icon"
                                className="icon"
                            />
                                <h3>Experience</h3>
                                <p>2 years <br /> Software Development</p> </Link>
                        </div>


                        <div className="details_container">
                            <Link to="/about"> <img
                                src={react2}
                                alt="education_icon"
                                className="icon"
                            />
                                <h3>Education</h3>
                                <p>B.Cs. University Of Jordan <br />M.Cs. Maharishi International University<br/> (Attending)</p>
                            </Link>  
                            </div>

                    </div>
                    <div className="text-Container">
                        <p>
                            Lmflasmfas flsnflasmflsa mf;smfsa
                            ;mfs;mfs;s
                            lmfslmfsa
                            ll lsfmdlfmsmf;lsdmlsgmf

                            gfmmgfd;
                            mg;lsdmlsgmflsdm;lsfmdlfmsmf
                            gddsfpmgf
                            mds;
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                        <p><br /></p>
                        <img
                            src={arrow} alt="" className="icon_arrow"
                            onClick={()=>window.location.href='/#exper'}
                        />
                    </div>

                </div>
            </div>
        </section>
        <section id = "exper">
        <p className="section_text_p1">Exlpore My</p>
        <h1 className='title'>Experience</h1>
        <div className='experience-details-container'>
            <div className='about-containers'>
                <div className="details_container">
                    <h2 childrenexperience-sub-title>Frontend Development</h2>
                    <br /><br />
                    <div className='article-container'>
                        <article>
                            <img
                                src={mar}
                                alt='experience icon'
                                className='icon' 
                            />
                            <div>
                                <h3>HTML</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img
                                src={mar}
                                alt='experience icon'
                                className='icon' 
                            />
                            <div>
                                <h3>CSS</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img
                                src={mar}
                                alt='experience icon'
                                className='icon' 
                            />
                            <div>
                                <h3>JavaScript</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img
                                src={mar}
                                alt='experience icon'
                                className='icon' 
                            />
                            <div>
                                <h3>BootStrap</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img
                                src={mar}
                                alt='experience icon'
                                className='icon' 
                            />
                            <div>
                                <h3>React.js</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img
                                src={mar}
                                alt='experience icon'
                                className='icon' 
                            />
                            <div>
                                <h3>SASS</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="details_container">
                    <h2 className="childrenexperience-sub-title">Backend Development</h2>
                    <br /><br />
                    <div className='article-container'>
                        <article>
                            <img
                                src={mar}
                                alt='experience icon'
                                className='icon' 
                            />
                            <div>
                                <h3>Java</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img
                                src={mar}
                                alt='experience icon'
                                className='icon' 
                            />
                            <div>
                                <h3>PostgresSQL</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img
                                src={mar}
                                alt='experience icon'
                                className='icon' 
                            />
                            <div>
                                <h3>Spring</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img
                                src={mar}
                                alt='experience icon'
                                className='icon' 
                            />
                            <div>
                                <h3>Git</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img
                                src={mar}
                                alt='experience icon'
                                className='icon' 
                            />
                            <div>
                                <h3>Docker</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img
                                src={mar}
                                alt='experience icon'
                                className='icon' 
                            />
                            <div>
                                <h3>AWS-cloud</h3>
                                <p>Intermediate (CLF002)</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
       </div>
    )
}

export default AboutContent



{/* <div className="left">
            <h1>Software engineer</h1>
            <p>
                I am a software engineer holding a Bachelor's degree in Computer Science, have spent the last 3 years studying and working in software development.
                I've had the opportunity to work on various projects, utilizing the latest technologies to deliver back-end components, Restful Api's and front-end interface's.<br></br> 
                I'm known for my ability to work collaboratively with cross-functional teams. I'm Agile learner, adaptable, and Receptive to training.<br></br>
                In tech my interests falls on building comprehensive, robust stand alone purposeful applications that serves the user's needs.  
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="true"/>
                </div>
            </div>
            
        </div> */}