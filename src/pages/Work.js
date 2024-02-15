import "../styles/Work.scss";
function Work() {
  return (
    <div id="work" className="work-container bg-neutral-900 text-accent-400">
      <ul className="" id="work-menu">
        <li className="work-menu-item fs-700">Work Experience</li>
        <li className="work-menu-item fs-700">Projects</li>
        {/* <li className="work-menu-item fs-700">THIS IS MY LIST 3</li>
        <li className="work-menu-item fs-700">FOUR</li> */}
      </ul>
      <div className="work-menu-background"></div>
      <div className="work-example"> Front-End Web Developer for GymBuddy </div>
    </div>
  );
}
export default Work;
