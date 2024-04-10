"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Languages: C++, Python, Html, JavaScript, SQL, CSS </li>
        <li>Developer Tools: VS Code, MYSQL Server, Windows</li>
        <li>Technologies/Frameworks: Linux, Git, GitHub, ReactJS, NodeJS, MongoDB, Figma, Canva, Power BI</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BMS INSTITUTE OF TECHNOLOGY AND MANAGEMENT, BANGALORE
          <br></br>
          Bachelor’s Of Engineering in Electronics and Communication - CGPA - 7.02
          <br></br>
          12/2020 – 06/2024
          
          </li>
          <li>Children Sr. Secondary School, Kota 
          <br></br>
          Intermediate - Percentage - 68.2% 
          <br></br>
          06/2019 – 08/2020
          </li>

          <li>Children's Garden School
            <br></br>
            High School - CGPA - 10
          </li>
          
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Front End Web Development Ultimate Guide</li>
        <li>Introduction to Programming Using HTML and CSS</li>
        <li>C++ Programming from Beginner to Ultimate Level </li>
        <li>Full Stack Programming for Complete Beginners in Python</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>ANVESHANA 2022 Winner: Topic - Power Generating Roadways
          <br></br>
          Designed a groundbreaking plan for harnessing wind energy from moving vehicles, to generate renewable electricity
          using vertical axis wind turbines near high-traffic roads and railway lines.</li>
        <li>Runner up in Project Based Learning 4th and 5th sem held @BMSIT campus.</li>
        <li>Solved Over 150 Coding Questions on Leetcode and GFG.</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-desk_image.jpeg" width={300} height={300} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a final year student of B.E. in ECE. I have experience
            working with C++, Python, JavaScript, ReactJS, Node.js, SQL, MongoDB.
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
