export default function Menu({ children, values, menuOpen, onClose, moveTo }) {
  const menubar = (
    <aside className="menu-bar">
        <img src="./cross.png" alt="" id="cross-icon" onClick={onClose}/>
      <ol className="menu">
        {values.map((item, index) => (
          <li key={index} className="menu-list" onClick={()=> moveTo(`section${index}`)}>{item}</li>
        ))}
        <button className="menu-button" ><a href="https://drive.google.com/file/d/1ifbnrJ10Qj1U71ptX5c6cfk13WnbsaHe/view?usp=sharing">Resume</a></button>
      </ol>
    </aside>
  );
  return <div>{!menuOpen ? children : menubar}</div>;
}
