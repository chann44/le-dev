import { List } from "@/components/list-layout";
import { LuGithub, LuTwitter, LuLinkedin } from "react-icons/lu";

function About() {
  return (
    <div className="flex flex-col gap-y-10">
      <article className="flex flex-col gap-3 mt-5">
        <p className="">{`Hi! I am a designer and developer residing in Berlin, currently building Next.js and various other projects at Vercel. My interests span a broad spectrum of subjects, encompassing web development, creative coding, game design, and human-computer interaction`}</p>
        <p className="">{`Since high school, I’ve spent years on algorithm competitions, freelance web design & development, and worked as a software engineer at Microsoft. In 2017, I earned my BSc degree in Computer Science from Fudan University. In 2018, I joined Vercel to help build the next generation of web development tools`}</p>
        <p className="">{`Since high school, I’ve spent years on algorithm competitions, freelance web design & development, and worked as a software engineer at Microsoft. In 2017, I earned my BSc degree in Computer Science from Fudan University. In 2018, I joined Vercel to help build the next generation of web development tools`}</p>
      </article>
      <div className="flex gap-x-2">
        <a href="">
          <LuGithub className="h-6 w-6" />
        </a>
        <a href="">
          <LuTwitter className="h-6 w-6" />
        </a>
        <a href="">
          <LuLinkedin className="h-6 w-6" />
        </a>
      </div>
      <hr className="border-black dark:border-primary" />
      <List />
      <List />
      <List />
    </div>
  );
}

export default About;
