
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import { BrowserRouter,
  Routes, 
  Route,
 } from 'react-router-dom';



function App() {
   const [mode,setmode]=useState("light")
   const [text,settext]=useState("dark")
   const [alert,setAlert]=useState(null)

  const showAlert=(messsage,type)=>{
    setAlert({
      msg:messsage,
      type:type,
    })
    setTimeout(()=>{
        setAlert(null)
    },2000)
  }
   


  const toggleMode=(colormode)=>{
    if (mode===colormode){
      setmode("light")
      settext("dark")
      showAlert("Light Mode has been Enabled","success")
      document.body.style.backgroundColor="white"
  
      
    }
    else{
      setmode(colormode)
      if (colormode==="dark"){
        showAlert("Dark Mode has been Enabled","success")
        settext("light")
        document.body.style.backgroundColor="grey"

      }
      else if(colormode==="danger"){
        settext("light")
        showAlert("Danger Mode has been Enabled","success")
        document.body.style.backgroundColor="#943246"

      }

      else if(colormode==="primary"){
        settext("light")
        showAlert("Primary Mode has been Enabled","success")
        document.body.style.backgroundColor="#9063ba"

      }
      else if(colormode==="warning"){
        settext("dark")
        showAlert("Warning Mode has been Enabled","success")
        document.body.style.backgroundColor="#e1e35d"

      }
      else if(colormode==="success"){
        settext("light")
        showAlert("Success Mode has been Enabled","success")
        document.body.style.backgroundColor="#3a822e"

      }
    }
  }

  const textcolor=(colormode)=>{
    if (colormode==="danger"){
      return "white"

    }
    else if (colormode==="dark"){
      return "white"
    }
    else if (colormode==="success"){
      return "white"
    }
    else if (colormode==="warning"){
      return "black"
    }
    else if (colormode==="primary"){
      return "white"
    }
    else if (colormode==="light"){
      return "black"
    }

    
  }
  const backgroundcolor=(colormode)=>{
    if (colormode==="danger"){
      return "#c95b81"

    }

    else if (colormode==="dark"){
      return "#aaa3a3"
    }
    else if (colormode==="success"){
      return "#196b0b"
    }
    else if (colormode==="warning"){
      return "#c4bf2d"
    }
    else if (colormode==="primary"){
      return "#52178a"
    }
    else if (colormode==="light"){
      return "white"
    }

    
  }




  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} text={text}  textcolor={textcolor}   />
      <div className="container">
      {<Alert alert={alert}/>}
      
      
        <Routes>
        
        <Route exact path='/' element={<TextForm heading="TextUtils-  Words Counter,Character Counter " mode={mode} show={showAlert} textcolor={textcolor} backgroundcolor={backgroundcolor} />}></Route>
        <Route exact path='/about' element={<About ab />}></Route>

        </Routes>
      </div>
 
      </BrowserRouter>

    </>
  );
}

export default App;
