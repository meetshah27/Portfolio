import React from "react";
import Particle from "../Particle";
import "./Experience.css";

// Import your company logos
import i3Logo from "../../Assets/Companies/i3Verticals.jpg";
import lindeLogo from "../../Assets/Companies/Linde.jpg";

function Experience() {
  const experiences = [
    {
      role: "Software Engineer ",
      company: "i3 Verticals",
      time: "July 2023 – August 2024",
      description: [
        "🚗 Built a bulk amendment system for vehicle permits using C#, ASP.NET MVC, JavaScript, and Azure SQL — cutting processing time by 90% for 500K+ users.",
        "🛠️ Resolved 50+ critical production issues with zero reopens, boosting system reliability.",
        "⚙️ Automated CI/CD pipelines with Jenkins and PowerShell, reducing manual testing by 70%.",
        "📄 Developed a Help Documentation Enhancer using C#, ASP.NET Core, ReactJS, and Oracle SQL to serve 200K+ users with auto-generated, image-rich guides — improving user support.",
        "🌐 Rolled out scalable solutions for transportation organizations across Ontario, New York, Tennessee, and Montana.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Linde Engineering",
      time: "April 2023 – July 2023",
      description: [
        "📝 Created an internal feedback system for 1,200+ employees using Django and Bootstrap.",
        "📊 Enabled data-driven insights by processing 35+ monthly employee suggestions.",
        "📅 Followed Agile sprints and Kanban to ensure timely delivery and collaborative progress.",
      ],
    },
  ];

  return (
    <div className="experience-wrapper">
      <Particle />
      <h1 className="experience-heading">
        My <span className="purple">Experience</span> 
      </h1>
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-block hover-effect">
            <div className="timeline-header">
              {exp.image && (
                <img
                  src={exp.image}
                  alt={`${exp.company} logo`}
                  className="company-logo"
                />
              )}
              <div>
                <h3>{exp.role}</h3>
                <h5>{exp.company}</h5>
                <span className="timeline-time">{exp.time}</span>
              </div>
            </div>
            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
