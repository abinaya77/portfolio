import React from "react";
import ItemLayout from "./ItemLayout";
import Image from 'next/image';

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-4 md:gap-8 w-full">
        <ItemLayout
          className="col-span-full lg:col-span-8 row-span-2 flex-col items-start"
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Get To Know Me!
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            As a passionate Full Stack Web Developer with nearly a year of experience, I&apos;ve honed my skills through various freelance projects. One notable project was developing an online course learning platform that included mobile responsiveness, user authentication, payment integration, and dynamic dashboards for both instructors and users.
            I&apos;m enthusiastic about leveraging my skills and knowledge to create impactful web solutions. I thrive on challenges and am excited to showcase my talents in a full stack development role.
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            nearly 1{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <Image
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=bootstrap,css,firebase,git,github,html,jquery,mongodb,nodejs,express,npm,postgres,react,tailwind,vercel,vite,vscode"
            alt="CodeBucks"
            width={1200} // Adjust width as needed
            height={80}  // Adjust height as needed
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
