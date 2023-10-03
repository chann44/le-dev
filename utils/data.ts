import { ListItem } from "@/components/list-item";
import { FaPollH } from "react-icons/fa";
import { GiAndromedaChain } from "react-icons/gi";
import { TbHandRock } from "react-icons/tb";
import { DiGit } from "react-icons/di";
import { GiNewShoot } from "react-icons/gi";

export const socialLinks = {
  Github: "https://github.com/chann44",
  Twitter: "https://twitter.com/44_chann",
  Linkedin: "https://www.linkedin.com/in/vikash-manda-69a231200/",
};

export const work: ListItem[] = [
  {
    title: "Webloom",
    description: "Frontend Engineer (Freelance)",
    logo: "",
    right: "June-2023 - Aug-2023",
  },
  {
    title: "Fetch",
    description: "Frontend Engineer",
    logo: "",
    right: "Aug-2022 - Jan-2023",
  },
  {
    title: "Komet",
    description: "Frontend Engineer Intern",
    right: "Feb-2022 - June-2022",
    logo: "",
  },
];

export const projects = [
  {
    name: "Pollor",
    link: "https://github.com/chann44/pollor",
    Icon: FaPollH,
    desc: " New Generation of polls ",
  },
  {
    name: "4-4chan",
    link: "https://github.com/chann44/4-4chan",
    Icon: GiAndromedaChain,
    desc: " Modren 4 chan with best ui ",
  },

  {
    name: "Drox",
    link: "https://www.npmjs.com/package/drox",
    Icon: TbHandRock,
    desc: "Deal with all public assets in a react project as javascript objects no need of typing long paths ",
  },
  {
    name: ".gitignore",
    link: "https://www.npmjs.com/package/@chan44/gitignore",
    Icon: DiGit,
    desc: "a package to genrate git ignore files for your project",
  },
  {
    name: "The Info",
    link: "https://github.com/chann44/TheInfo",
    Icon: GiNewShoot,
    desc: " a website to get latest news ",
  },
];
