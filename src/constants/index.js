import {
    mixmaster,
    videography,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    massmutual,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bebington
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Development",
      icon: web,
    },
    {
      title: "Recording Mixing Mastering",
      icon: mixmaster,
    },
    {
      title: "Filmmaking",
      icon: videography,
    },
    {
      title: "3D Modelling",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "MassMutual",
      icon: massmutual,
      iconBg: "#fff",
      date: "April 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Mix/Master Engineer",
      company_name: "Studioul",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Hai ca la tesla daca e",
        "Mi-o fost lene sa schimb",
        "E de pe un api, stfu",
        "muzikie",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Nici asta nu e la shopify, prostule",
        "Invat si eu NextJS asa la mema",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Iti dai seama...",
      ],
    },
    {
      title: "Facebook Page Moderator",
      company_name: "BEBINGTON",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        ",,TREABA,,,,,, FOARTE,,,,, GREA",
        "AM AVUT,,, DE,,,, REPARAT,,,,,,,,,,,CIURUCURI,,,",
        ",,,,,SI,,,,,,ALTELE,,,,",
        ",,,BB,,,",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        ",,,,,,TREABA,,,BUNA,,,, FAC ,,BAIETII,, ASTIA DOMLE,,,, NU CA JAPONEJII,,,,, AAIA DE LA,,,,,, IBANEZ,,,,,",
      name: ",,BEBINGTON",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        ",,,EU AL ,,CUNOSC,,,,PE MOSH,,, , , CRACIUN , , SI E,,,UN EXCROC,,,,,MAI BINE I ZICEATI,,,,LU NEA BEBE,,,,CE VRETI,,,DE CRACIUN,,,,,,,MERY,,,X-MAS,,,",
      name: "BB",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "VLADUZ,,,,,NU FI,,,,,,OBRAZNIC",
      name: "HIS RIGHT HONORABLE LORD BEBINGLY,,,,,,",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "text-[#65ba9d]",
        },
        {
          name: "mongodb",
          color: "text-[#913eff]",
        },
        {
          name: "tailwind",
          color: "text-[#f79c70]",
        },
      ],
      image: carrent,
      source_code_link: "https://learning-deploy-next-69bg.vercel.app/",
    },
    {
      name: "Apple",
      description:
        "Normal ca nu l-am facut eu",
      tags: [
        {
          name: "react",
          color: "text-[#65ba9d]",
        },
        {
          name: "restapi",
          color: "text-[#913eff]",
        },
        {
          name: "scss",
          color: "text-[#f79c70]",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Emag",
      description:
        "Daca citesti asta imi iei asta de craciun ms",
      tags: [
        {
          name: "nextjs",
          color: "text-[#65ba9d]",
        },
        {
          name: "supabase",
          color: "text-[#913eff]",
        },
        {
          name: "css",
          color: "text-[#f79c70]",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.emag.ro/monitor-gaming-xiaomi-g27qi-27-ips-2k-180hz-1ms-amd-freesync-certificare-tuv-low-blue-light-hdmi-dp-1-4-vesa-negru-ela5593eu/pd/D39R81YBM/?ref=sponsored_products_p_d_fallback_5_4&provider=rec-ads&recid=recads_2_a6758b6c2f268d2d1773dedf0ae30a0b1e32862ec8b8aa216de5710d83cb2b7c_1736894292&scenario_ID=2&aid=3e9f060d-bbb2-11ef-bf55-02e5d3610841&oid=205400076",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };