import { Section } from "../../ui/Section";
import { BlogsCard } from "./BlogsCard";

export const BlogsContainer = () => {
  return (
    <Section label="Recent Blogs Section.">
      <div className="heading">
        <h1 className="text-2xl md:text-3xl">Recent Blogs.</h1>
      </div>

      <div className="flex items-stretch gap-5 mt-5 flex-wrap">
        <BlogsCard />
        <BlogsCard />
      </div>
    </Section>
  );
};
