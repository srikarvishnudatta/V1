import { useEffect, useState } from "react";
import "./App.css";
import EmailBar from "./components/EmailBar";
import Header from "./components/Header";
import Main from "./components/Main";
import SocialBar from "./components/SocialBar";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(()=>{
    const handleResize = () =>{
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Header currentWidth = {width}/>
      <SocialBar />
      <EmailBar />
      <Main width={width}/>
    </>
  );
}

export default App;
