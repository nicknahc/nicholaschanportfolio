import "../styles/Work.scss";
import gymbuddydemo from "../assets/gymbuddy-demo.png";
function Work() {
  return (
    <div id="work" className="work-container bg-neutral-900 text-accent-400">
      <ul className="" id="work-menu">
        <li id="item-1" className="work-menu-item fs-700">
          Work Experience
        </li>
        <li className="work-menu-item fs-700">Projects</li>
        {/* <li className="work-menu-item fs-700">THIS IS MY LIST 3</li>
        <li className="work-menu-item fs-700">FOUR</li> */}
      </ul>
      <div className="work-menu-background"></div>
      <div className="work-example">
        <img
          src={gymbuddydemo}
          height="auto"
          width="600"
          alt="A demonstration gif of the gymbuddy website"
        ></img>
        <a
          className="gymbuddy-link"
          target="_blank"
          rel="noreferrer"
          href="https://getgymbuddy.com"
        >
          <div>LIVE SITE</div>
        </a>
      </div>
    </div>
  );
}
export default Work;
