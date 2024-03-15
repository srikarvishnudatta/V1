import Card from "./Card";
import Headings from "./Headings";
import PROJECT_DATA from "../ProjectData";

export default function Projects(){
    return <div className="projects-main" id="section2">
        <Headings number={3} title={"Things I've worked on"}/>
        <div className="projects">
        {/* <Card title={"Image Leaf Disease Classifier"} paragraph={"Deve and these models have been converted to JSON format to predict the results on the website."} 
        techStack={["php", "java"]} />
        <Card title={"Image Leaf Disease Classifier"} paragraph={"Deve and these models have been converted to JSON format to predict the results on the website."} 
        techStack={["php", "java"]} />
        <Card title={"Image Leaf Disease Classifier"} paragraph={"Deve and these models have been converted to JSON format to predict the results on the website."} 
        techStack={["php", "java"]} /> */}
        {PROJECT_DATA.map((element, index)=>{
            return <Card 
            title={element.title}
            paragraph={element.paragraph}
            techStack={element.techStack}
            link={element.link}
            key={index}
            />
        })}
        
        </div>
    </div>
}