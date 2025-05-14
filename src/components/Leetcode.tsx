import React from "react";
import { SectionTitle } from "./ui/SectionTitle";

export function Leetcode() {
  const leetcodeUsername = "omega_code"; // Replace with your actual Leetcode username

  return (
    <section id="leetcode" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-8">
        <SectionTitle>Leetcode Progress</SectionTitle>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Leetcode Stats Cards */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <img
                src={`https://leetcode-stats-card.onrender.com/api/card?username=${leetcodeUsername}&theme=dark&border=0&radius=10`}
                alt="Leetcode Stats Card"
                className="w-full h-auto"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null; // Prevent infinite error loop
                  e.currentTarget.src = `https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Inter&border=0&radius=10`;
                }}
              />
            </div>
          </div>

          {/* Leetcode Journey Text */}
          <div>
            <h3 className="text-center text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              My Leetcode Journey
            </h3>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-4">
              Solving problems on Leetcode has helped me strengthen my Data
              Structures and Algorithms skills. I enjoy tackling challenges that
              push my problem-solving abilities and prepare me for technical
              interviews.
            </p>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-6">
              I've completed hundreds of problems across a variety of topics,
              including arrays, trees, graphs, and dynamic programming. My goal
              is to keep improving and stay consistent in learning and solving
              new problems daily.
            </p>
            <div className="text-center">
              <a
                href={`https://leetcode.com/u/${leetcodeUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Leetcode Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
