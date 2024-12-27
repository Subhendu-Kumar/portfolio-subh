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
import survey from "../public/surveyapp.png";
import math from "../public/math-draw.png";
import pixo from "../public/pixo.jpg";

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
  // {
  //   id: 5,
  //   title: "My tech stack",
  //   description: "I consistently seek to enhance",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "",
  //   spareImg: "./b5.svg",
  // },
  {
    id: 6,
    title: "Would you like to collaborate on a project?",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
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
    title: "Pixo - Image sharing mobile app",
    description:
      "Share your moments effortlessly with Pixo, the ultimate image-sharing app. Upload, explore, and connect through stunning visuals anytime, anywhere!",
    img: pixo,
    iconLists: [
      "./react-native.svg",
      "./tail.svg",
      "./nodejs.svg",
      "./ts.svg",
      "./expo.svg",
      "./android.svg",
      "./ios.svg",
    ],
    link: "https://github.com/Subhendu-Kumar/pixo",
    hash: "eVODh5NH-:?bt6~p%MIUIUoexaMxxaa~WA56aKkWoLjZRiaya~oeWC",
  },
  {
    title: "Math Draw - AI based math app",
    description:
      "Unleash the power of AI with Math Draw, the ultimate math app. Simply draw equations, and let the app solve and analyze them effortlessly for you.",
    img: math,
    iconLists: [
      "./react.svg",
      "./tail.svg",
      "./nodejs.svg",
      "./js.svg",
      "./google.svg",
    ],
    link: "https://github.com/Subhendu-Kumar/math-draw-fe",
    hash: "egEfTj9FIUj[t79E%Mt7ayWB9F%Mt7fQWB~qD%M{j[t7IUt7t7azWB",
  },
  {
    title: "Survey App - Google Form Clone",
    description:
      "Effortlessly manage surveys with this intuitive Google Forms clone. Create, share, collect responses, and analyze data seamlessly for a hassle-free experience.",
    img: survey,
    iconLists: [
      "./react.svg",
      "./tail.svg",
      "./nodejs.svg",
      "./ts.svg",
      "./prisma.svg",
      "./postgresql.svg",
    ],
    link: "https://github.com/Subhendu-Kumar/survey_app_client",
    hash: "e5SigU%fk9-:oy59M|RkM|V]DSj?j?WVjs~CV@V[WCf6-VRjRjWCf7",
  },
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
    hash: "eIOWv@]|%z.89H4qt1%LoLW.PEpdMwV?-ntnx]M{awxZD$jD-pkDRQ",
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
    hash: "e9CiI201p;0G~S0L^,$q^WJ==fSPNFT2V=vyo|Rhb{RO0w-mrs-MNK",
  },
  {
    title: "Anime App - infinity scroll with Next.js",
    description:
      "Experience seamless infinite scrolling with our Anime App built on Next.js. Explore an extensive library of anime titles effortlessly, enjoying smooth and fast navigation.",
    img: anime,
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg"],
    link: "https://infinity-scroll-anime-app-subh.vercel.app/",
    hash: "e6Ee}vsE^%57%0rV9c?FE3sQW7NyMv%3-;0MD*kXw]Rj~q-QIooJS5",
  },
  {
    title: "Drag The Cards Fun Project",
    description:
      "Drag cards across your screen effortlessly with our intuitive Draggable Cards WebApp.",
    img: drag,
    iconLists: ["./react.svg", "./tail.svg", "./js.svg", "fm.svg"],
    link: "https://draggable-cards-subhendu.netlify.app/",
    hash: "e37wysIVIBIo610KxutkxH+zDgo#s=o#O=_4RjNFRjRiJCofban$w0",
  },
  // {
  //   title: "Personal BookShelf",
  //   description:
  //     "Effortlessly organize and explore your book collection. Track reading progress, get personalized recommendations, and share favorites with friends.",
  //   img: bookshelf,
  //   iconLists: ["./react.svg", "./tail.svg", "./js.svg"],
  //   link: "https://personal-bookshelf-subh.vercel.app/",
  //   hash: "eXMHS{offPxaj[~pWBWCazay^*WBayazfQWFWBayj[fQNFayazj[fQ",
  // },
  {
    title: "Classic Snake Game",
    description:
      "This is a classic Snake Game implemented using pure HTML, CSS, and JavaScript. It's a simple yet addictive game where the player controls a snake to eat food and grow longer while avoiding collisions with itself and the boundaries of the game board.",
    img: snake,
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://snake-game-subhendu.netlify.app/",
    hash: "e8KBA|4PCixt#9K#wNsBf6S4GEwJr@azW.K#rsniayWXKfnPniaybI",
  },
  {
    title: "Classic Tic-Tac-Toe Game",
    description:
      "Tic Tac Toe is a traditional two-player game where players take turns marking a 3x3 grid. The goal is to get three of their symbols (X or O) in a row.",
    img: tictac,
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://tic-tac-toe-subhendu.netlify.app/",
    hash: "eDQc3I_N.88^M{-;9EDiWBj?%gIAMxkCj[.8V@WBozof%Nt8t7t8j[",
  },
  {
    title: "Hang-Man Game",
    description:
      "Hangman is a word-guessing game where player thinks of a word and tries to guess it by suggesting letters. For each incorrect guess, a part of a hangman is drawn. The goal is to guess the word before the hangman is fully drawn.",
    img: hangman,
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://hang-man-game-subhendu.netlify.app/",
    hash: "eGMsAi_0yVx[jF_KIWVsaLX8yVVtRkafj?a}oea}a|j@idXSoeoLWX",
  },
  {
    title: "Pac-Man Game",
    description:
      "In the pac man game, players control a character named Pac-Man, a yellow, circular creature. The objective is to navigate through a maze, gobbling up all the dots while avoiding colorful ghosts named Blinky, Pinky, Inky, and Clyde.",
    img: pacman,
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://pac-man-game-subhendu.netlify.app/",
    hash: "e1682B0000ui=#00-=x]n5NZ9pxdo$s9R$00?b-=McWZ9s$+xHk8R+",
  },
  {
    title: "Analog Clock",
    description:
      "This is a simple analog clock website created using HTML, CSS, and JavaScript.",
    img: clock,
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://analog-clock-subh.netlify.app/",
    hash: "eLQ9r;D4DN.AkEVqo#kCkDadDgxvt7bdV?ROt8t8M_ofMwt8t7Rjj?",
  },
  {
    title: "Stone-Paper_scissor Game",
    description:
      "A simple yet fun implementation of the classic Stone-Paper-Scissors game using HTML, CSS, and JavaScript. Challenge yourself in this timeless game of strategy and luck.",
    img: sps,
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://stone-paper-scissor-subh.netlify.app/",
    hash: "eDRVnK^#x[XniwIHxpoyShjF?WIvaLaJkW~lE9VtnNgMj=a$oLWBj[",
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

export const skills = [
  { image: "./c.svg", name: "C lang" },
  { image: "./java.svg", name: "Java" },
  { image: "./python.svg", name: "Python" },
  { image: "./html.svg", name: "HTML" },
  { image: "./css.svg", name: "CSS" },
  { image: "./js.svg", name: "JavaScript" },
  { image: "./nodejs.svg", name: "Node.js" },
  { image: "./react.svg", name: "React" },
  { image: "./tail.svg", name: "Tailwind" },
  { image: "./ts.svg", name: "TypeScript" },
  { image: "./next.svg", name: "Next.js" },
  { image: "./redux.svg", name: "Redux" },
  { image: "./mysql.svg", name: "MySQL" },
  { image: "./mongodb.svg", name: "MongoDB" },
  { image: "./postgresql.svg", name: "PostgreSQL" },
  { image: "./prisma.svg", name: "Prisma" },
  { image: "./firebase.svg", name: "Firebase" },
  { image: "./gsap.svg", name: "GSAP" },
  { image: "./fm.svg", name: "Framer Motion" },
  { image: "./android.svg", name: "Android" },
  { image: "./react-native.svg", name: "React Native" },
  { image: "./expo.svg", name: "Expo" },
  { image: "./postman.svg", name: "Postman" },
  { image: "./git.svg", name: "Git" },
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
