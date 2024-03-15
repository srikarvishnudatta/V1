export default function Headings({number, title}){
    return <>
    <span className="numberings">0{number}. </span>
      <h2 className="headings-class">{title}</h2>
        <div className="line"></div>
    </>
}