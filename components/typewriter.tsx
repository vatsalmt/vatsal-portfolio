"use client"

import { Typewriter } from "react-simple-typewriter"

export default function TypewriterSpan() {
    const skills = [
        "Cyber Security Researcher",
        "Cyber Security Analyst",
        "System Administrator",
        "Cloud Security Analyst",
        "Security Engineer",
        "Network Engineer"
    ]
    return (
        <>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Vatsal Trivedi</h1>
            <p className="text-xl mb-8">
                I'm a{" "}
                <span className="text-accent">
                    <Typewriter
                        words={skills}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </span>
            </p>
        </>
    )
}
