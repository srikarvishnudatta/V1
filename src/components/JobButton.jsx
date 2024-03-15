export default function JobButton({clickHandler, isActive, children, index}){
    const buttonStyle = {backgroundColor:"#112240", color:"#64ffda", borderRadius:"10px"};
    const button = <button onClick={()=>clickHandler(index)} 
    className="company-value"
    style={isActive ? buttonStyle : undefined}>
        {children}
    </button>
    return button;
}