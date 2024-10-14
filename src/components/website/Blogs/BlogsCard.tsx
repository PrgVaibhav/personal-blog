import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { FcReading } from "react-icons/fc";
import { MdOutlineDateRange } from "react-icons/md";

export const BlogsCard = () => {
  return (
    <div className="w-full md:w-[350px] bg-gray-500 p-3  card rounded-md shadow-lg  transition duration-300 ease-in-out transform  ">
      <div className="card-image w-full relative">
        {/* <img
          src="https://images.unsplash.com/photo-1716436329478-e4261139e1ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-auto object-cover rounded-md"
        /> */}
        <div className="new-tag">
          <span className="text-sm bg-[#FF6347] text-white p-1 rounded-md absolute top-0 right-0 mt-2 mr-2 z-10 animate-bounce">
            New
          </span>
        </div>
      </div>
      <div className="card-content bg-[#1f1f1f] mt-3 ">
        {/* //* Card top */}
        <div className="tags flex gap-2 items-center mb-2">
          <span className=" text-green-900 rounded text-xs flex gap-2 items-center bg-green-300 p-1 w-max">
            <MdOutlineDateRange /> 08-June-2024
          </span>
        </div>
        <div className="flex flex-col  mb-2">
          <h1 className="text-xl md:text-2xl font-bold">
            Lorem ipsum dolor sit, amet consectetur!
          </h1>
        </div>

        <div>
          <p className="text-md para mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum
            ex a quod ratione natus necessitatibus veritatis laborum fuga autem.
          </p>
        </div>
      </div>

      <div className="control flex justify-between mt-4 items-center">
        {/* <ShareButton
          url="https://kumarvaibhav.vercel.app"
          title={"Boom Boom BOom"}
        /> */}
        <div className="flex gap-2">
          <span className="text-xs bg-[#e5d1ee] w-max text-[#71557e] p-1 rounded shadow-md">
            Technology
          </span>
          <span className=" text-[#48648f]  rounded text-xs flex gap-2 items-center bg-[#cfddea] p-1 w-max">
            <FcReading /> 4 Min Read
          </span>
        </div>
        <Link
          className="btn flex items-center text-sm p-1 rounded-md"
          to={"blog/1"}
        >
          Read More <GoArrowUpRight />
        </Link>
      </div>
    </div>
  );
};
