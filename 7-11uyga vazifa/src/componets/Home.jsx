import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="container">
    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32" viewBox="0 0 61 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z" fill="#33323D"/>
</svg>
        <div className="list">
<ul>
    <NavLink to={"/"}><li>HOME</li></NavLink>
    <NavLink to={"/Portfolio"} ><li>PORTFOLIO</li></NavLink>
    <NavLink to={"/Contact"} ><li>CONTACT ME</li></NavLink>
    
</ul>
        </div>
        <div className="Home_page">
            <img src="./src/images/Bitmap.png" alt=""  className='i'/>
            <img src="./src/images/Porto 1.png" alt="" className='img' />
            <div className="Home">
                <h1 className='Home_page-titil'>Hey, I’m Alex <br /> Spencer and I <br /> love building <br /> beautiful websites</h1>
                <button className='btn'>ABOUT ME</button>
            </div>
            <div className="Main_page">
                <img src="./src/images/Bitmap (3).png" alt=""  className='main'/>
                <h1 className='about'>About Me</h1>
                                                             <p className='Home_p'>I’m a junior front-end developer looking for a <br /> new role in an exciting company. I focus<br /> on writing accessible HTML, using modern CSS <br />practices and writing clean JavaScript. When<br /> writing JavaScript code, I mostly use React, but<br /> I can adapt to whatever tools are required. I’m<br /> based in London, UK, but I’m happy working<br /> remotely and have experience in remote teams.<br /> When I’m not coding, you’ll find me outdoors.<br /> I love being out in nature whether that’s going<br /> for a walk, run or cycling. I’d love you to check<br /> out my work.</p>
                                                             <NavLink to={"/Portfolio"}>
            <button className='btn1'>GO TO PORTFOLIO</button> </NavLink>
            </div>
            <div className="Futer">
                <h1 className='text'>Interested in doing <br /> a project together?</h1>
                <NavLink to={"/Contact"}>
                <button className='btn2'>CONTACT ME</button></NavLink>
            </div>
            <div className="futer_main">
<img src="./src/images/Combined Shape 2.png" alt=""  className='ii'/>
<ul className='ff'>
<NavLink     to={"/"}><li>HOME</li></NavLink>
    <NavLink to={"/Portfolio"} ><li>PORTFOLIO</li></NavLink>
    <NavLink to={"/Contact"} ><li>CONTACT ME</li></NavLink></ul>
            </div>

        </div>

    </div>
    </>
  )
}

export default Home