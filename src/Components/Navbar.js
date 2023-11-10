import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'

export default function Navbar(props) {



 
  return (
    <nav  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.text}`}>
    <div className="container-fluid">
      <a className="navbar-brand" style={{color:props.textcolor(props.mode)}} href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-a active" style={{color:props.textcolor(props.mode)}} aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-a" style={{color:props.textcolor(props.mode)}} href="/about">{props.about}</a>
          </li>
           */}
         
        </ul>
  
        <form className="d-flex" role="search">
         <div className="hole" id='hole1' onClick={()=>{props.togglemode("danger")}}></div> 
         <div className="hole" id='hole2' onClick={()=>{props.togglemode("warning")}}></div> 
         <div className="hole" id='hole3' onClick={()=>{props.togglemode("primary")}}></div> 
         <div className="hole" id='hole4' onClick={()=>{props.togglemode("success")}}></div> 
        <div className={`form-check form-switch text-${props.text}`}>
          <input className="form-check-input hole5" onClick={()=>{props.togglemode("dark")}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        </form>
      </div>
    </div>
   




  </nav>

  )
}


Navbar.propTypes={
    title:PropTypes.string,
    about:PropTypes.string,
}

Navbar.defaultProps={
    title:"Set Title Here",
    about:"About"
}



