export default function SocialBar({width}){
    return <div className={width <=750 ? "socialbar-vertical" : "sidebar-socials"}>
    <ul>
      {/* <a href=""><img src="./icons8-instagram.svg" alt="" /></a> */}
      <a href="https://www.linkedin.com/in/srikar-akella-0207411aa/"><img src="./icons8-linkedin.svg" alt="" /></a>
      <a href="https://github.com/srikarvishnudatta"><img src="./icons8-github.svg" alt="" /></a>
      {width <= 750 ? undefined  : <div className="vertical-line"></div>}
    </ul>
  </div>
}