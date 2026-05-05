import SKILLS from "./data.js";

function Header() {
    return (
        <div className="header">
            <h1>Dev Profile</h1>;
        </div>
    );
}

function Avatar() {
    return <img src="PP.jpg" alt="" className="avatar" />;
}
function Intro() {
    return (
        <div className="intro">
            <h2>Ephraim S</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                iure aliquam error reprehenderit, architecto velit laudantium
                itaque voluptate enim aut quod nulla quos veritatis animi, fugit
                minima nobis! Hic, nisi!
            </p>
        </div>
    );
}

function Skills() {
    return (
        <ul className="skill-list">
            {SKILLS.map((skill) => (
                <Skill skill={skill.skill} color={skill.color} level={skill.level} />
            ))}
        </ul>
    );
}

function Skill({ skill, color, level }) {
    return (
        <li className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
                {level === "beginner" && "👶"}
                {level === "intermediate" && "👍"}
                {level === "advanced" && "💪"}
            </span>
        </li>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <div className="card">
                <Avatar />
                <div className="data">
                    <Intro />
                    <Skills />
                </div>
            </div>
        </div>
    );
}

export default App;
