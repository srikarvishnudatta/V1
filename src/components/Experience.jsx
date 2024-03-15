import { useState } from "react";
import Headings from "./Headings";
import Job from "./Job";
import JobButton from "./JobButton";
const JOBS = ["Foxmula", "CodeSpeedy"];

export default function Experience(){
    const [selected, setSelected] = useState(0);
    function clickHandler(value){
        setSelected(value)
    }
    return <div className="experience-main" id="section1">
        <Headings number={2} title={"Where I've worked"}/>
        <div className="job-experience">
            <div className="company-list">
                {/* <JobButton clickHandler={clickHandler} selected={selected}/> */}
                {JOBS.map((element, index) => <JobButton key={index} clickHandler={clickHandler}
                isActive={index === selected}
                index={index}
                >{element}</JobButton>)}
            </div>
            <Job index={selected}/>
        </div>

    </div>
}