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
        <li>
          Languages: Java, Python, C, C++, C#, SQL, JavaScript, TypeScript
        </li>
        <li>
          Technologies: Azure, Next.js, Node.js, React, .Net, Express.js,
          Sequilize, Bootstrap, tailwindcss, materialUI.
        </li>
        <li>
          Databases: MS SQL Server, MySQL, MongoDB, PostgreSQL, Google Firebase,
          GROC, GraphQl, SQLite3.
        </li>
        <li>
          Interfaces: Git, Linux, Docker, Apache HTTP Server, RESTful APIs.
        </li>
        <li>
          Software: Microsoft Azure DevOps, Postman, Notion, Trello, Asana,
          Slack, Microsoft Office Suite.
        </li>
        <li>
          Other: AI, ML, Cybersecurity, Networking, Cryptography, Azure
          Databases & server.
        </li>
        <li>
          Soft Skills: Team collaboration, problem-solving, analytical skills,
          communication, management.
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Codepath Mobile Development</li>
        <li>University Espoir</li>
        <li>OpenClassroom</li>
        <li>TryHackMe</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Android App Mobile Development</li>
        <li>Introduction to Cybersecurity</li>
        <li>Networking</li>
        <li>Web Design </li>
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
        <Image src="/images/about-image.webp" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-teal-300 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a dedicated Software Engineer with a deep passion for building
            secure, efficient software solutions from the ground up. My tech
            journey is driven by an insatiable curiosity and a strong foundation
            in computer science, complemented by practical experience with
            cutting-edge technologies such as Java, Python, C#, and cloud
            computing with Microsoft Azure. My approach to technology is not
            just about coding; it's about being part of a team where
            collaboration, creativity, and a disciplined, teachable attitude are
            key to overcoming challenges and driving innovation. With every
            project, I strive to be an active learner, eagerly embracing new
            technologies and methodologies to make a meaningful impact in the
            tech world.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
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
