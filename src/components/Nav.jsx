import Menu from "./Menu";
import { useEffect, useRef, useState } from "react";

const values = ["About", "Experience", "Work", "Contact"];

export default function Nav({currentWidth}) {
  const myRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(()=>{
    const handleClick = (event)=>{
      if(event.target !== myRef.current && (event.target.className !== "menu-bar" && event.target.className !== "menu-list" && event.target.className !== "menu-button"
      && event.target.className !== "menu")){
        setMenuOpen(false)
      }
    }
    window.addEventListener('click', handleClick, true)
    return () =>{
      window.removeEventListener('click', handleClick, true)
    }
  },[])
  function handleOpen(){
    setMenuOpen((menu)=>!menu)
  }
  // replace later with react navigator.
  function handleNavigation(id){
    console.log('clicking', id);
    document.getElementById(id).scrollIntoView()
    if(menuOpen){
      handleOpen()
    }
  }
  if(currentWidth <= 750){
    console.log('hamburger'); 
    return <Menu values={values} menuOpen={menuOpen} onClose={handleOpen} moveTo={handleNavigation}>
      <img src="./menu.png" alt="" onClick={handleOpen} ref={myRef}/>
    </Menu>
  }
  return (
    <div>
      <ol className="list-styling">
        {values.map((item, index) => (
          <li key={index} onClick={()=>handleNavigation(`section${index}`)}>{item}</li>
        ))}
        <button>
        <a href="https://drive.google.com/file/d/1ifbnrJ10Qj1U71ptX5c6cfk13WnbsaHe/view?usp=sharing">Resume</a>
      </button>
      </ol>
    </div>
  );
}
