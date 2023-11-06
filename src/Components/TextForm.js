import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [text,setText]=useState("Enter the message")
    // setText("Enter new message")

    const handleupcase=()=>{
        setText(text.toUpperCase())
        props.show("Converted To UpperCase","success")
        
        
    }
    const handlelocase=()=>{
        setText(text.toLowerCase())
        props.show("Converted To LowerCase","success")
        
    }
    const handleonchange=(event)=>{
        setText(event.target.value) 
    }
    
  return (
    <>
    <div className='container' style={{color:props.textcolor(props.mode)}}>
        <div className="mb-3">
            <label htmlFor="myBox" className='form-label my-2'>{props.heading}</label>
            <textarea  id="myBox" style={{backgroundColor:props.backgroundcolor(props.mode),color:props.textcolor(props.mode)}} onChange={handleonchange} value={text} rows="3" className="form-control my-3"></textarea>
            <button className="btn btn-primary mx-1" onClick={handleupcase}  >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handlelocase}  >Convert to LowerCase</button>
            
        </div>
      
    </div>

    <div className="container my-2" style={{color:props.textcolor(props.mode)}}>
        <h1>Your Text Summary</h1>
        <p>{text.trim().split(/\s+/).filter(word => word !== '').length} Words and {text.length} Characters</p>
        <p>Takes {0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Some Text to Preview Here"}</p>
    </div>
    </>
  )
}

TextForm.propTypes={
    heading: PropTypes.string,
}

TextForm.defaultProps={
    heading: "SET HEADING HERE",

}


