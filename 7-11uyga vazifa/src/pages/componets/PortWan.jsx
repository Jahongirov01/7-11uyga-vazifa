import React from 'react'
import { NavLink } from 'react-router-dom'

const PortWan = () => {
  return (
    <div className="container">
    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32" viewBox="0 0 61 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z" fill="#33323D"/>
</svg>
        <div className="list">
<ul>
    <NavLink     to={"/"}><li>HOME</li></NavLink>
    <NavLink to={"/Portfolio"} ><li>PORTFOLIO</li></NavLink>
    <NavLink to={"/Contact"} ><li>CONTACT ME</li></NavLink>
    
</ul>
        </div>
        <div className="Main_images">
            <img src="./src/images/Porto.png" alt="" />
        </div>
        <div className="Main_titil">
            <h1 className='titil'>Manage</h1>
                        <p className='Home_'>This project required me to build a <br /> fully responsive landing page to the <br /> designs provided. I used HTML5, along <br /> with CSS Grid and JavaScript for the <br /> areas that required interactivity, such <br />as the testimonial slider.</p>
       <button className='btn3'>VIEW PROJECT</button>
        </div>
        <div className="Main_titiltwo">
            <h1 className='Main_two'>Bookmark</h1>
            <p >This project required me to build a fully <br /> responsive landing page to the designs <br /> provided. I used HTML5, along with CSS Grid <br /> and JavaScript for the areas that required <br />
             interactivity, such as the features section.</p>
             <button className='btn4'>VIEW PROJECT</button>
        </div>
        <div className="Main_section_two">
<img src="./src/images/Port.png" alt="" className='im' />
        </div>
        <div className="Main_titil_sree">
            <img src="./src/images/Porto 3.png" alt="" className='im' />
<h1 className='hh'>Insure</h1>
                <p className='pp'>This was a small project which mostly  <br />consisted of HTML and CSS. I built  <br />a fully-responsive landing page. The only <br /> JavaScript this project required was to <br /> enable the toggling of the mobile <br /> navigation.</p>        
       <button className='btn5'>VIEW PROJECT</button>
        </div>
        <div className="futer_main">
<img src="./src/images/Combined Shape 2.png" alt=""  className='ii'/>
<ul className='ff'>
<NavLink     to={"/"}><li>HOME</li></NavLink>
    <NavLink to={"/Portfolio"} ><li>PORTFOLIO</li></NavLink>
    <NavLink to={"/Contact"} ><li>CONTACT ME</li></NavLink></ul>
            </div>
        </div>
  )
}

export default PortWan