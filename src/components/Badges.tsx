import React from "react";
import { SectionTitle } from "./ui/SectionTitle";

const badges = [
  {
    id: "leetcode-50",
    platform: "LeetCode",
    title: "50 Days Badge 2024",
    image: "https://assets.leetcode.com/static_assets/marketing/2024-50.gif",
    profile: "https://leetcode.com/omega_code/",
  },
  {
    id: "github-shark",
    platform: "GitHub",
    title: "Pull Shark",
    image:
      "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
    profile: "https://github.com/code-with-aneesh",
  },
  {
    id: "github-quickdraw",
    platform: "GitHub",
    title: "Quickdraw",
    image:
      "https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png",
    profile: "https://github.com/code-with-aneesh",
  },
  {
    id: "github-yolo",
    platform: "GitHub",
    title: "YOLO",
    image:
      "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png",
    profile: "https://github.com/code-with-aneesh",
  },
  {
    id: "hackerrank-5star",
    platform: "HackerRank",
    title: "5 Star in Problem Solving",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/hackerrank-3628885-3030009.png", // Enhanced HackerRank logo
    profile: "https://www.hackerrank.com/profile/aneesh_angane",
  },
  {
    id: "hackerrank-3star-python",
    platform: "HackerRank",
    title: "3 Star in Python",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/python-3521655-2945099.png", // Python-themed image
    profile: "https://www.hackerrank.com/profile/aneesh_angane",
  },
];



export function Badges() {
  return (
    <section id="badges" className="py-20">
      <div className="container mx-auto max-w-6xl px-8">
        <SectionTitle>Coding Badges</SectionTitle>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 gap-4">
          {badges.map((badge) => (
            <a
              key={badge.id}
              href={badge.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex flex-col items-center justify-center p-5 bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-xl blur-lg transition-all duration-300" />

              {/* Badge Image */}
              <img
                src={badge.image}
                alt={badge.platform}
                className="w-30 h-30 rounded-md transition-transform duration-300 group-hover:scale-110"
              />

              {/* Badge Text */}
              <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white text-center">
                {badge.title}
              </p>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {badge.platform}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
