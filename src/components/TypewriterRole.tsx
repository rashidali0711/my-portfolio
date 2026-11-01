"use client";

import { useState, useEffect } from "react";

const roles = [
  "Aspiring Full-Stack Developer",
  "Python & JavaScript Programmer",
  "PHP & MySQL Web Engineer",
  "Infomatica Labs Former Intern",
  "Cybersecurity & AI Enthusiast",
];

export function TypewriterRole() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          // Pause before deleting
          setIsDeleting(true);
          setTypingSpeed(1800);
        } else {
          setTypingSpeed(70);
        }
      } else {
        // Deleting characters
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400);
        } else {
          setTypingSpeed(35);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <div className="inline-flex items-center text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-300 min-h-[56px] py-1">
      <span className="text-cyan-400 font-mono mr-2 select-none">&gt;</span>
      <span className="inline-block pt-1 pb-2 leading-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400">
        {currentText}
      </span>
      <span className="w-2.5 h-6 ml-1.5 bg-cyan-400 inline-block animate-pulse rounded-sm shrink-0" />
    </div>
  );
}
