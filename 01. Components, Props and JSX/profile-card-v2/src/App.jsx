import skills from "./data";

function Avatar() {
    return (
        <div>
            <img className="avatar" src="PP.jpg" alt="" />
        </div>
    );
}

function Intro() {
    return (
        <div>
            <h1>Ephraim S.</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                fugiat magnam hic quaerat. At maxime fuga voluptatibus officia,
                tempora obcaecati fugit tempore pariatur rerum necessitatibus
                porro eveniet voluptates. Nisi, praesentium!
            </p>
        </div>
    );
}
function Skill(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.color }}>
            <span>{props.skill}</span>
            <span>
                {props.level === "advanced" && "💪"}
                {props.level === "intermediate" && "🏋️"}
                {props.level === "beginner" && "👶"}
            </span>
        </div>
    );
}
function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill
                    skill={skill.skill}
                    emoji="🌐"
                    color={skill.color}
                    level={skill.level}
                />
            ))}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <div className="header">
                <h1>Dev-Profile v2</h1>
            </div>
            <div className="card">
                <Avatar />
                <div className="data">
                    <Intro />
                    <SkillList />
                </div>
            </div>
        </div>
    );
}

export default App;
