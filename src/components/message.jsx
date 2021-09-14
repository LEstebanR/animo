import { useState } from "react";
import "../styles/message.css";
import messagges from "../messages";

const  Message =  () =>  {
  const [index, setIndex] = useState(0);

  const changeMessage = () => {
    setIndex(parseInt(Math.random()*messagges.length))
  }
  
  return( 
  <h1 className="message-container" onClick={changeMessage}>{messagges[index]} </h1>

  )
}


export default Message;
