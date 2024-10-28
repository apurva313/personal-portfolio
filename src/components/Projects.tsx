"use client"

import { useState } from "react"
import { projects } from "@/data/data"
import Image from "next/image";

export default function Projects() {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Front-end", "Back-end", "Cloud", "Testing"];

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    return (
        <div className="flex flex-col justify-around items-center gap-8 sm:mx-60 mx-10 sm:mt-24 mt-8">

            {/* Heading text */}
            <div className="text-center">
                <h1 className="text-3xl font-semibold">My Projects</h1>
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, distinctio.</h1>
            </div>

            {/* Domain selector */}
            <div className="flex justify-center space-x-4 mt-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-orange-500" : "bg-gray-700"}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-4 md:px-16">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="bg-gray-800 p-4 rounded-lg">
                        <Image src={project.imageUrl} height={50} width={50} alt={project.title} className="rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-orange-500 mt-2">{project.category}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}