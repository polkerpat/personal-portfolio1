function MainC({ bio, skills }) {

    const projects = [
        {
            title: "Personal Portfolio",
            description: "A responsive website showcasing my skills and projects."
        },
        {
            title: "Calculator App",
            description: "A simple application performing basic arithmetic operations."
        },
        {
            title: "Registration System",
            description: "A student registration system designed to manage student information."
        }
    ];

    return (
        <main className="portfolio-main" id="home">

            {/* HOME SECTION */}
            <section className="hero">
                <h1>Hello, I'm a Web Developer</h1>
                <p>
                    Welcome to my personal portfolio.
                    I am passionate about technology,
                    programming and building useful applications.
                </p>

                <a href="#projects" className="btn">
                    View My Projects
                </a>

                <a href="#contact" className="btn secondary-btn">
                    Contact Me
                </a>
            </section>

            {/* ABOUT SECTION */}
            <section id="about">
                <h2>About Me</h2>
                <p>{bio}</p>
            </section>

            {/* SKILLS SECTION */}
            <section id="skills">
                <h2>My Skills</h2>

                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects">
                <h2>My Projects</h2>

                <div className="projects-container">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}

export default MainC;