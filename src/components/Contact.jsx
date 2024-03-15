import SocialBar from "./SocialBar";

export default function Contact({width}){
    return <div className="contact" id="section3">
        <h4>04. What's next</h4>
        <p>I am looking for Full-time opportunities at the moment as 
            Software Developer/Engineer, Front-end developer, Back-end developer and 
            Full Stack Developer. Please feel free to reach out to me!
        </p>
        <button>
            <a href="mailto:srikarvishnudatta@gmail.com">Say Hello</a>
        </button>

        {width<=750 && <SocialBar width={width}/>}
    </div>
}