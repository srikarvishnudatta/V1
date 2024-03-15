import Contact from "./Contact";
import Content from "./Content";
import Experience from "./Experience";
import Intro from "./Intro";
import Projects from "./Projects";

export default function Main(){
    return <div className="main-styling">
        <Intro />
        <Content />
        <Experience />
        <Projects />
        <Contact />
    </div>
}