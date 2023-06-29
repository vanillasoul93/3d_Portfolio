import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    azure,
    bootstrap,
    csharp,
    dotnet,
    sql,
    tailwind,
    nodejs,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    watchitlater,
    passlock,
    gamegrab,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: ".NET Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "CSharp",
      icon: csharp,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "DotNet",
      icon: dotnet,
    },
    {
      name: "SQL",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I don't think I have met anyone else so driven to learning new technologies. Davin's growth continues to impress.",
      name: "Zander Schaap",
      designation: "Sr. Service Desk Agent",
      company: "Stanford Healthcare & School of Medicine",
      image: "https://media.licdn.com/dms/image/C5635AQGte3lN9ACM7w/profile-framedphoto-shrink_800_800/0/1614178822136?e=1688630400&v=beta&t=RwFslfKP7pQPHDRQEQdnm5UllZzZ3bAXP-kiGvWSqQQ",
    },
    {
      testimonial:
        "Davin is great at researching the project at hand and quickly delivering consistent results. ",
      name: "Dakota Damico",
      designation: "IT Security and Infrastructure Manager",
      company: "GLS",
      image: "https://media.licdn.com/dms/image/C5603AQEYv3gdc4ssoQ/profile-displayphoto-shrink_800_800/0/1623031340028?e=1693440000&v=beta&t=xPzBkUKi1PNM3_FHZnLkzrWfx7toeXtS75bYwCVU7ag",
    },
    {
      testimonial:
        "After Rick optimized our asshole, our lube decreased by 50%. We can't thank them enough!",
      name: "Lisas Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Watch It Later",
      description:
        "Web-based platform that allows users to search movies from TMDB and add them to lists, providing a convenient and efficient solution for creating lists of movies you may want to see but don't have time for at the moment.",
      tags: [
        {
          name: "ASP.NET",
          color: "blue-text-gradient",
        },
        {
          name: "Entity Framework",
          color: "green-text-gradient",
        },
        {
          name: "C#",
          color: "pink-text-gradient",
        },
      ],
      image: watchitlater,
      source_code_link: "https://github.com/vanillasoul93/WishlistWebApp",
    },
    {
      name: "PassLock",
      description:
        "Desktop based password manager, uses AES-GCM encryption and stores all data locally. You can add categories and icons to the categories providing an excellent way for users to organize passwords and keep them safe.",
      tags: [
        {
          name: ".NET 7",
          color: "blue-text-gradient",
        },
        {
          name: "WPF",
          color: "green-text-gradient",
        },
        {
          name: "AES-Encryption",
          color: "pink-text-gradient",
        },
      ],
      image: passlock,
      source_code_link: "https://github.com/vanillasoul93/PassLock",
    },
    {
      name: "GameGrab",
      description:
        "A comprehensive video game picker. Enables users to import games from their steam profile, add custom games and actions, create playlists from those games and randomly select a Game from the playlists.",
      tags: [
        {
          name: ".NET 7",
          color: "blue-text-gradient",
        },
        {
          name: "WPF",
          color: "green-text-gradient",
        },
        {
          name: "C#",
          color: "pink-text-gradient",
        },
      ],
      image: gamegrab,
      source_code_link: "https://github.com/vanillasoul93/GameGrab",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };