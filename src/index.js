import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#FF6600",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#ffcccc",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#ff80ff",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div>
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
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

function Avatar() {
  return <img src="groot.jpg" alt="Groot" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Groot</h1>
      <p>
        Full Stack Developer and teacher at Udemy. When not coding or preparing
        a course, I like to play board games,to cook (and eat),or just to enjoy
        the Portuguese sun at the beach.
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
