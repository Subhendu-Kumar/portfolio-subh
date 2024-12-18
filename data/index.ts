import videoverse from "../public/video-verse.png";
import anime from "../public/anime.png";
import bookshelf from "../public/bookshelf.png";
import memories from "../public/memories.png";
import snake from "../public/snake.png";
import tictac from "../public/tictac.png";
import hangman from "../public/hangman.png";
import pacman from "../public/pacman.png";
import clock from "../public/clock.png";
import drag from "../public/drag.png";
import sps from "../public/sps.png";

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
    img: videoverse,
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
    link: "https://memories-client-subhendu.vercel.app/",
  },
  {
    title: "Video Verse - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Video-Verse. Seamlessly connect with colleagues and friends.",
    img: videoverse,
    iconLists: [
      "./next.svg",
      "./tail.svg",
      "./ts.svg",
      "./stream.svg",
      "./clerk.svg",
    ],
    link: "https://video-verse-subhendu.vercel.app/",
  },
  {
    title: "Anime App - infinity scroll with Next.js",
    description:
      "Experience seamless infinite scrolling with our Anime App built on Next.js. Explore an extensive library of anime titles effortlessly, enjoying smooth and fast navigation.",
    img: anime,
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg"],
    link: "https://infinity-scroll-anime-app-subh.vercel.app/",
  },
  {
    title: "Personal BookShelf",
    description:
      "Effortlessly organize and explore your book collection. Track reading progress, get personalized recommendations, and share favorites with friends.",
    img: bookshelf,
    iconLists: ["./react.svg", "./tail.svg", "./js.svg"],
    link: "https://personal-bookshelf-subh.vercel.app/",
  },
  {
    title: "Classic Snake Game",
    description:
      "This is a classic Snake Game implemented using pure HTML, CSS, and JavaScript. It's a simple yet addictive game where the player controls a snake to eat food and grow longer while avoiding collisions with itself and the boundaries of the game board.",
    img: snake,
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://snake-game-subhendu.netlify.app/",
  },
  {
    title: "Classic Tic-Tac-Toe Game",
    description:
      "Tic Tac Toe is a traditional two-player game where players take turns marking a 3x3 grid. The goal is to get three of their symbols (X or O) in a row.",
    img: tictac,
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://tic-tac-toe-subhendu.netlify.app/",
  },
  {
    title: "Hang-Man Game",
    description:
      "Hangman is a word-guessing game where player thinks of a word and tries to guess it by suggesting letters. For each incorrect guess, a part of a hangman is drawn. The goal is to guess the word before the hangman is fully drawn.",
    img: hangman,
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://hang-man-game-subhendu.netlify.app/",
  },
  {
    title: "Pac-Man Game",
    description:
      "In the pac man game, players control a character named Pac-Man, a yellow, circular creature. The objective is to navigate through a maze, gobbling up all the dots while avoiding colorful ghosts named Blinky, Pinky, Inky, and Clyde.",
    img: pacman,
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://pac-man-game-subhendu.netlify.app/",
  },
  {
    title: "Analog Clock",
    description:
      "This is a simple analog clock website created using HTML, CSS, and JavaScript.",
    img: clock,
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://analog-clock-subh.netlify.app/",
  },
  {
    title: "Drag The Cards Fun Project",
    description:
      "Drag cards across your screen effortlessly with our intuitive Draggable Cards WebApp.",
    img: drag,
    iconLists: ["./react.svg", "./tail.svg", "./js.svg", "fm.svg"],
    link: "https://draggable-cards-subhendu.netlify.app/",
  },
  {
    title: "Stone-Paper_scissor Game",
    description:
      "A simple yet fun implementation of the classic Stone-Paper-Scissors game using HTML, CSS, and JavaScript. Challenge yourself in this timeless game of strategy and luck.",
    img: sps,
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://stone-paper-scissor-subh.netlify.app/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "SDE Intern @Kidjig Technologies",
    desc: "Software Development Intern at Kidjig Technologies: Full-stack development, building scalable web applications, enhancing user experiences, and solving technical challenges.",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Self Full-Stack Projects",
    desc: "Built and deployed full-stack web applications, handling both frontend and backend development.",
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
