import videoVerse from "../public/video-verse.png";
import anime from "../public/anime.png";
import bookshelf from "../public/bookshelf.png";
import memories from "../public/memories.png";

export const navItems = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I emphasize working closely with clients and maintaining clear and open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./db-skd.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm comfortable with time zone flexibility.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Currently enhancing my development skills with advanced topics.",
    description: "The Inside Scoop",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Avid tech lover driven by a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "./b4.svg",
  },
  {
    id: 5,
    title: "My tech stack",
    description: "I consistently seek to enhance",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "./b5.svg",
  },
  {
    id: 6,
    title: "Would you like to collaborate on a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Memories - A Simple CRUD Application",
    des: "Discover the ease of managing data with this simple CRUD app. Create, read, update, and delete records effortlessly for a seamless user experience.",
    img: memories,
    iconLists: [
      "./react.svg",
      "./tail.svg",
      "./nodejs.svg",
      "./js.svg",
      "mongodb.svg",
    ],
    link: "https://github.com/Subhendu-Kumar/memories-client",
  },
  {
    id: 2,
    title: "Video Verse - Video Conferencing App",
    des: "Experience seamless communication with Video Verse, offering high-quality video and audio, screen sharing, and real-time collaboration.",
    img: videoVerse,
    iconLists: [
      "./next.svg",
      "./tail.svg",
      "./ts.svg",
      "./stream.svg",
      "./clerk.svg",
    ],
    link: "https://github.com/Subhendu-Kumar/Video_Verse",
  },
  {
    id: 3,
    title: "Anime App - infinity scroll with Next.js",
    des: "Experience seamless infinite scrolling with our Anime App built on Next.js. Explore an extensive library of anime titles effortlessly, enjoying smooth and fast navigation.",
    img: anime,
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg"],
    link: "https://github.com/Subhendu-Kumar/infinity-scroll-anime-app",
  },
  {
    id: 4,
    title: "Personal BookShelf",
    des: "Effortlessly organize and explore your book collection. Track reading progress, get personalized recommendations, and share favorites with friends.",
    img: bookshelf,
    iconLists: ["./react.svg", "./tail.svg", "./js.svg"],
    link: "https://github.com/Subhendu-Kumar/Personal_Bookshelf",
  },
];
export const Allprojects = [
  {
    title: "Memories - A Simple CRUD Application",
    description:
      "Discover the ease of managing data with this simple CRUD app. Create, read, update, and delete records effortlessly for a seamless user experience.",
    img: memories,
    iconLists: [
      "./react.svg",
      "./tail.svg",
      "./nodejs.svg",
      "./js.svg",
      "mongodb.svg",
    ],
    link: "https://github.com/Subhendu-Kumar/memories-client",
  },
  {
    title: "Video Verse - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Video-Verse. Seamlessly connect with colleagues and friends.",
    img: videoVerse,
    iconLists: [
      "./next.svg",
      "./tail.svg",
      "./ts.svg",
      "./stream.svg",
      "./clerk.svg",
    ],
    link: "https://github.com/Subhendu-Kumar/Video_Verse",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Self Full-Stack Dev Projects",
    desc: "Built and deployed full-stack web applications, handling both frontend and backend development.",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Dev Project",
    desc: "Designed and developed Web applications for some Clients",
    thumbnail: "./exp2.svg",
  },
];

export const socialMedia = [
  {
    img: "./link.svg",
    link: "https://www.linkedin.com/in/subhendu-kumar-dutta/",
  },
  {
    img: "./git.svg",
    link: "https://github.com/Subhendu-Kumar/",
  },
  {
    img: "./twit.svg",
    link: "https://x.com/Subhendu_330/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];
