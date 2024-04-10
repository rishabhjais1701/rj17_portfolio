"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A modern and dynamic portfolio website built using React showcasing skills and projects.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rishabhjais1701/rj17_portfolio",
    previewUrl: "https://drive.google.com/file/d/1x5nmdE8DnD-75jMz_uHIm5mV-I5xtUvj/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Fitness Fusion Website Template",
    description: "Fusion Fitness: An All-in-One Health and Wellbeing Template Providing a Variety of Wellness Resources and Features for a Seamless User Experience.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rishabhjais1701/FitnessFusion",
    previewUrl: "https://drive.google.com/file/d/1E6FCA_vKjP3eAnIdvp9pLJSYJ0wD6vlJ/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Real time Baby Incubator Monitoring System",
    description: "Real-time Baby Incubator Monitoring System utilizing IoT technology and web apps to provide secure remote monitoring and control of vital baby parameters.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rishabhjais1701/BabyIncubatorMonitoringSystem",
    previewUrl: "https://drive.google.com/file/d/14NkCoXu7K2028bQ3HQC-MmkPSwgpfqMN/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Library Management System",
    description: "Efficient and Intuitive Library Management System, Simplifying Processes for Librarians, Streamlined Check-In/Out, Digital Catalog & Data Analytics Dashboard.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/rishabhjais1701/library_management_system",
    previewUrl: "https://drive.google.com/file/d/1Jql9Wxj97BJ36RK7w1iFw_wRWLC5kHpO/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Stock Market Prediction using Machine Learning",
    description: "Innovative Stock Market Prediction Model Utilizing Machine Learning Algorithms And Historical Data For Informed Investment Decisions.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rishabhjais1701/Stock_market_prediction_using_ML-Randomforest-",
    previewUrl: "https://drive.google.com/file/d/1qbVkLOUaqxqtLWaA4abX4uUBO1tN19Ij/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Expense Tracker App",
    description: "Upcoming......",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
