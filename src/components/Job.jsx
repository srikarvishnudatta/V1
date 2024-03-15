const EXPERIENCES = [
  {
    role: "Backend Developer Intern",
    company: "Foxmula Ltd",
    dates: "May 2021 - Aug 2021",
    experience: [
      "Created a pet store web app using Express.js with MongoDB as database and used RazorAPI for payments.",
      "Collaborated with cross-functional teams to analyze user feedback.",
      "Identified areas for improvement in the MongoDB design, leading to a 20% reduction in data redundancy and improved overall system performance.",
    ],
  },
  {
    role:"Android Developer Intern",
    company:"Code Speedy Ltd",
    dates:"Jan 2021 - Apr 2021",
    experience: [
        "Designed and implemented the user interface of the login/register and user-profile page for a food delivery app.",
        "Utilized ImageView widget for images of food to enhance the user experience of the app.",
        "Facilitated a data handling system that increased efficiency by 30% and allowed for seamless presentation of user-specific information, such as order history and preferences.",
      ],
  }
];

export default function Job({index=0}) {
  return (
    <div className="job-main">
      <h3>
        {EXPERIENCES[index].role}<span> @ {EXPERIENCES[index].company}</span>
      </h3>
      <p>{EXPERIENCES[index].dates}</p>
      <ul>
        {EXPERIENCES[index].experience.map((element, index)=> <li key={index}>{element}</li>)}
      </ul>
    </div>
  );
}
