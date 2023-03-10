import { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
    const [currentText, setCurrentText] = useState("");
    let index = 0;
  
    useEffect(() => {
      const type = setInterval(() => {
        setCurrentText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(type);
        }
      }, 5);
  
      return () => clearInterval(type);
    }, [index, text]);
  
    return <div className='Typewriter'>{currentText}</div>;
  };

  export default Typewriter;