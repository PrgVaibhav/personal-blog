import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    id: 1,
    icon: <FaXTwitter className="text-xl" />,
    link: "https://x.com/SyntaxError408",
    text: "SyntaxError408",
  },
  {
    id: 2,
    icon: <FaGithub className="text-xl" />,
    link: "https://github.com/PrgVaibhav",
    text: "prgVaibhav",
  },
  {
    id: 3,
    icon: <FaLinkedin className="text-xl" />,
    link: "https://www.linkedin.com/in/devxvaibhav",
    text: "devXvaibhav",
  },
];

export const HeroSection = () => {
  return (
    <section className="w-full md:w-10/12  m-auto mt-4 p-4">
      <h1 className="text-2xl md:text-3xl mb-2 heading">Hi, I'm Vaibhav,</h1>
      <div className="">
        <p className="para mb-2 text-md ">
          A passionate React developer specializing in creating responsive and
          dynamic websites. I have extensive experience in React, JavaScript,
          and UI/UX design. In my spare time, I enjoy coding challenges and
          exploring new technologies. Explore my work and feel free to connect
          with me for collaborations or inquiries.
        </p>
        <p className="para  mb-2 text-md ">
          This blog is all about my web development journey mixed with life’s
          fun moments and random musings. Think of it as a friendly neighbor
          chat with a tech twist. I’ll share developer tips, personal tales, and
          use some AI for writing help. Join me for a mix of learning, fun, and
          tech adventures!
        </p>
      </div>
      <div className="socials flex gap-4 mt-4 flex-wrap">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            target="_blank"
            rel="noreferrer"
            className="flex"
            aria-label={link.text}
          >
            {link.icon}/
            <span
              className="hover:underline 
            "
            >
              {link.text}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
