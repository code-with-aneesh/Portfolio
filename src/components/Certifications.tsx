import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Introduction to Neural Networks",
    issuer: "Simple Learn",
    date: "Apr 2025",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQ0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODEyMzM1MF80NzQwNzA5MTc0MzQ5NzcwODMzNC5wbmciLCJ1c2VybmFtZSI6IkFuZWVzaCBBbmdhbmUgIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4234%2FIntroduction%2520to%2520Neural%2520Network%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1346888387352768750&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVz892d6rwjoxMDk6yrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAMmqNTVBAAAA",
    image: "/assets/neural_cert_image.png",
  },
  {
    title: "Scientific Computing with Python",
    issuer: "FreeCodeCamp.org",
    date: "Mar 2024",
    link: "https://www.freecodecamp.org/certification/fcc8af9d708-dd8c-45fb-95cc-b06ad89ae6d1/scientific-computing-with-python-v7",
    image: "/assets/free_code_image.png",
  },
  {
    title: "Matlab Onramp",
    issuer: "Matlab",
    date: "May 2023",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=04c66239-dffb-47a1-ba51-06c35d7f061b&",
    image: "/assets/matlab_onramp_image.png",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
