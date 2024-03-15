export default function Card({title, paragraph,techStack, link}){
    return <div className="card">
        <div className="card-images">
        <img src="./icons8-folder.svg" alt="" />
        <div className="card-github-image"><a href={link}><img src="./icons8-github.svg" alt="" id="github-image" /></a></div>
        </div>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <ul>
            {techStack.map((element, index)=> <li key={index} className="stack-style">{element}</li>)}
        </ul>
    </div>
}