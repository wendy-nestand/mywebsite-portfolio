"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React News App AI Powered",
    description:
      "Web App that uses  Natural Language Processing to generate news articles.",
    image: "/images/projects/freenews.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/wendy-nestand/freenews",
    previewUrl: "https://freenews-nine.vercel.app/",
  },
  {
    id: 2,
    title: "Social Media Web App",
    description:
      "Elohim is a web application created with the React library, NextJs, Typescript and Sanity backend. Elohim is a social media app that allows users to connect with each other and share content related to spirituality through a variety of features such as posting, following other users, messaging and more.",
    image: "/images/projects/el.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/el-ohim/el-ohim",
    previewUrl: "https://el-ohim-bl4y-2w80w3e0d-el-ohim.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "E-commerce Application",
  //   description: "Project 3 description",
  //   image: "/images/projects/3.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 4,
    title: "Instagram Clone",
    description: "Project 4 description",
    image: "/images/projects/instagram.webp",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/dy-cipher/InstagramClone",
    previewUrl: "https://github.com/dy-cipher/InstagramClone",
  },
  {
    id: 5,
    title: "SimpleTweet",
    description: "Authentication and CRUD operations",
    image: "/images/projects/twitter.webp",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/dy-cipher/SimpleTweet",
    previewUrl: "https://github.com/dy-cipher/SimpleTweet",
  },
  {
    id: 6,
    title: "Flixster",
    description: "Netflix like app ",
    image: "/images/projects/netflix.webp",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/dy-cipher/Flixster",
    previewUrl: "https://github.com/dy-cipher/Flixster",
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
      <h2 className="text-center text-4xl font-bold text-teal-300 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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
