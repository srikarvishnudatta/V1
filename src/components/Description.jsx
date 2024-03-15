import Headings from "./Headings";

const listOfTechnologies = ['JavaScript & TypeScript', 'React & Node', 'Java', 'Python'];
const listOfTechnologies2 = ['HTML/CSS', 'Docker', 'AWS', 'Android'];



export default function Description() {
  return (
    <div className="description-class"  id="section0">
      <Headings number={1} title={"About me"}/>
      <section className="description-and-image">
        <div className="my-description">
            <p>
            Hello! My name is Srikar. I enjoy making web and mobile apps. Currently working on 
            Splitwise clone and a Notion-like template website to track your activities.
            I like to make all of my ideas minimalistic. I have been making mobile apps since grade 9.
            </p>
            <p>
                Today, I have a Bachelors degree in Computer Science and Engineering from Vellore 
                Institute of Technology, India. And, I am pursuing Master's of Applied Computer Science 
                @ <span>Concordia University</span> and will be graduating in Spring 2024.
            </p>
            <p>Here are the few technologies I worked with recently: </p>
            <div className="list-styler">
            <ul className="technology-list">
                    {listOfTechnologies.map((element, index)=> {
                        return <li key={index}>{element}</li>
                    }
                    )}
                </ul>
                <ul className="technology-list">
                {listOfTechnologies2.map((element, index)=> {
                        return <li key={index}>{element}</li>
                    }
                    )}
                </ul>
            </div>
        </div>
        <img src="./image.jpeg" alt="" className="my-img"/>
      </section>
    </div>
  );
}
