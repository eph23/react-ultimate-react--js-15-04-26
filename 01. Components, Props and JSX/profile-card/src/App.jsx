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
        <div className="skill" style={{ backgroundColor: props.bgc }}>
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
        </div>
    );
}
function SkillList() {
    return (
        <div className="skill-list">
            <Skill skill="React" emoji="🌐" bgc="#2662EA" />
            <Skill skill="JavaScript" emoji="💪" bgc="#EFD81D" />
            <Skill skill="CSS" emoji="✅" bgc="#FF3B00" />
            <Skill skill="HTML" emoji="🎯" bgc="#60DAFB" />
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <div className="header">
                <h1>Dev-Profile</h1>
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
