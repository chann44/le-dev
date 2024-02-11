import { ListItem } from "@/components/list-item";
;

export const socialLinks = {
  Github: "https://github.com/chann44",
  Twitter: "https://twitter.com/44_chann",
  Linkedin: "https://www.linkedin.com/in/vikash-manda-69a231200/",
};

export const work: ListItem[] = [
  {
    title: "Qiro",
    description: "Full Stack Engineer",
    right: "Feb-2024 - present",
  },
  {
    title: "Webloominc",
    description: "Frontend Engineer (Freelance)",
    logo: "/work/webloom.jpeg",
    right: "June-2023 - Dec-2023",
  },
  {
    title: "Fetch",
    description: "Frontend Engineer",
    logo: "/work/fetch.jpeg",
    right: "Aug-2022 - Jan-2023",
  },
  {
    title: "Komet",
    description: "Frontend Engineer Intern",
    right: "Feb-2022 - June-2022",
    logo: "/work/komet.jpeg",
  },
];

export const projects = [
  {
    name: "Pollor",
    link: "https://github.com/chann44/pollor",
    Icon: "/project/pollor.svg",
    desc: " New Generation of polls ",
  },
  {
    name: "4-4chan",
    link: "https://github.com/chann44/4-4chan",
    Icon: "/project/chan.svg",
    desc: " Modren 4 chan with best ui ",
  },

  {
    name: "Drox",
    link: "https://www.npmjs.com/package/drox",
    Icon: "/project/drox.svg",
    desc: "Deal with all public assets in a react project as javascript objects no need of typing long paths ",
  },
  {
    name: ".gitignore",
    link: "https://www.npmjs.com/package/@chan44/gitignore",
    Icon: "/project/git.svg",
    desc: "a package to genrate git ignore files for your project",
  },
  {
    name: "The Info",
    link: "https://github.com/chann44/TheInfo",
    Icon: "/project/news.svg",
    desc: " a website to get latest news ",
  },
];
