import './App.css';
import {useState} from 'react';
const App = () => {
  const [su,setsu] =useState(true);
  const handlesu=()=>{
    setsu(!su)
  }
  return (
   <>
      <body>
       
        
        <button  className={su?'log':'log1'} onClick={handlesu}>SHUT</button>
      
       
       <div className="container2">
        <form>

        <input  type='text' className='uname1' placeholder=' user name'/>
        <input type='password' className='password1' placeholder=' password' required/>
        <input type='password' className='conpassword' placeholder=' confirm password'/>
        <button className='sibutton'>SIGN UP</button>
        </form>
        <button  onClick={handlesu} className={su?'sub':'sub1'}>SIGN UP</button>
         <div className={su?'sur':'sul'} ></div>
       </div>
      </body>
   </>
  )
}

export default App;