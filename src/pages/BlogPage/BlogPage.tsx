import { useNavigate } from "react-router-dom";
import { Section } from "../../components/ui/Section";
import { ShareButton } from "../../components/ui/ShareButton";
import { useTitle } from "../../hooks/useTitle";
import { IoMdArrowRoundBack } from "react-icons/io";

const para = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, ratione repudiandae. Libero atque nam esse excepturi? Totam  dolorem consectetur assumenda dolorum eaque iure deserunt sunt, incidunt  similique, recusandae error facere libero.",
  "Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequuntur aspernatur qui dolores harum quasi deserunt! Numquam ex magni necessitatibus dicta error, aspernatur optio provident, perspiciatis, exercitationem earum natus. Praesentium autem nam minima voluptatem itaque labore repellendus accusamus quod sint.",
  "Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem maiores inventore et explicabo, nostrum reprehenderit, quis ducimus omnis labore quia voluptate delectus odit pariatur. Harum aliquid repellendus totam, rem magnam sit a nulla id voluptas consequatur eos nesciunt. Enim illo totam ea corrupti id?",
  "Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem maiores inventore et explicabo, nostrum reprehenderit, quis ducimus omnis labore quia voluptate delectus odit pariatur. Harum aliquid repellendus totam, rem magnam sit a nulla id voluptas consequatur eos nesciunt. Enim illo totam ea corrupti id?",
  "Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Quisquam voluptates, quod, natus, quae, repellendus quia dolorum voluptas voluptate quos quibusdam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem maiores inventore et explicabo, nostrum reprehenderit, quis ducimus omnis labore quia voluptate delectus odit pariatur. Harum aliquid repellendus totam, rem magnam sit a nulla id voluptas consequatur eos nesciunt. Enim illo totam ea corrupti id?",
];

export const BlogPage = () => {
  useTitle({ title: "Blog Page" });
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Section label="BlogPage Section.">
      <div className="flex flex-col gap-4">
        <div className="go-back">
          <span onClick={goBack} className="text-xl cursor-pointer">
            <IoMdArrowRoundBack />
          </span>
        </div>
        {/* <div className="blog-image">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFpJTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="blog-image"
            className="w-screen h-60 object-cover rounded-lg shadow-md"
          />
        </div> */}
        <div className="blog-heading flex flex-col gap-2">
          <div>
            <h1 className="text-2xl md:text-4xl mb-2 heading">
              This is a blog heading, and it is a blog page.
            </h1>
            <p className="sub-heading para text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              est doloremque optio exercitationem mollitia incidunt corporis
              sequi totam maxime!
            </p>
          </div>
          <div className=" flex flex-col gap-1">
            <span className="text-sm sub-para">
              By <span className="author">Vaibhav Kumar</span> on{" "}
              <time>12th August 2021</time>
            </span>
            <span className="mt-2">
              <ShareButton
                url="https://kumarvaibhav.vercel.app"
                title="Lorem ipsum dolor sit amet"
              />
            </span>
          </div>
        </div>
        <article className="blog-content flex flex-col gap-3">
          {para.map((p, index) => (
            <p className="para" key={index}>
              {p}
            </p>
          ))}
        </article>
      </div>
    </Section>
  );
};
