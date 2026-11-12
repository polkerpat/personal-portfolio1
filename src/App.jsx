import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import MainC from "./MainC.jsx";
import Footer from "./Footer.jsx";

function App() {
    const name = "LEE praise emele";
    const matricNo = "25/sci21/021";

    const bio = "I am a student with sufficient experience in React, JavaScript and currently learning more about web development. I am passionate about creating user-friendly and visually appealing web applications. I am also a team player and enjoy collaborating with others to achieve common goals.";

    const skills = ["HTML", "CSS", "JavaScript", "React"];

    const email = "lee00@gmail.com";
    const year = 2026;

    const projects = [
        {
            title: "Personal Portfolio",
            description: "A responsive website showcasing my skills and projects."
        },
        {
            title: "Calculator App",
            description: "An application that performs basic arithmetic operations."
        },
        {
            title: "Registration System",
            description: "A system designed to manage student information."
        }
    ];

    return (
        <div>
            <Header name={name} matricNo={matricNo} />
            <Nav />

            <Routes>
                <Route
                    path="/"
                    element={<MainC bio={bio} skills={skills} />}
                />

                <Route
                    path="/about"
                    element={
                        <main>
                            <h2>About Me</h2>
                            <p>{bio}</p>
                            <p>Matric Number: {matricNo}</p>
                        </main>
                    }
                />

                <Route
                    path="/projects"
                    element={
                        <main>
                            <h2>My Projects</h2>

                            <div className="projects-container">
                                {projects.map((project, index) => (
                                    <div className="project-card" key={index}>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </main>
                    }
                />

                <Route
                    path="/contact"
                    element={<Footer email={email} year={year} />}
                />

                <Route
                    path="*"
                    element={<h2>Page Not Found</h2>}
                />
            </Routes>
        </div>
    );
}

export default App;