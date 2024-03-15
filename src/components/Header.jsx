import Nav from "./Nav";
export default function Header({currentWidth }){
    return <div className="header-style">
    <div><img src="./letter-logo.png" alt="" /></div>
    <Nav currentWidth={currentWidth} />
  </div>
}