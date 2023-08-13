"use client";
import { RootState } from "@/store";
import Image from "next/image";
import { useSelector } from "react-redux";
import img from '@/assets/imgs/img_instagram1.jpg'
const AboutPage = function () {

  return (
    <div className="m-auto">
      <div className="px-8 flex flex-col">
      <div>
        <h2 className="text-[24px] uppercase mt-5 mb-[15px]">About</h2>
        <div className="flex flex-col w-full justify-center items-center">
          <strong className="text-[26px]">Welcome to Camelia</strong>
          <span className="text-[14px]">
            {" "}
            "Camelia puts its heart and soul into every product, giving people
            minimalism from the smallest things."{" "}
          </span>
          <hr className="bg-black text-black border-slate-500 border-t-[0.5px] w-full my-8"></hr>
        </div>
      </div>
      <div>
        <span className="text-[14px] flex flex-col gap-4">
          <span className="indent-9">
            {"  "}Surely we have all been experiencing small troubles in our
            daily lives from our pockets being overloaded with many items to the
            fact that our keys, headphones, and phones are lost in our own
            backpacks and bags that we put in a messy way. But then we come to
            take it as a habit and live with these "small" problems...
          </span>
          <span className="indent-9">
            With the message "More than Simplicity", Camelia devotes herself to
            making her products. Not only is the simplicity of the exterior
            design helping users save time thinking about choosing the right
            clothes, but the interior design of each product is cared for and
            streamlined to create convenience and orderliness for users.
          </span>
          <span className="indent-9">
            Experience and feel the change of yourself with Camelia!
          </span>
        </span>
        <div className="flex justify-center flex-col items-center w-full">
          <Image 
                src={img}
                alt="image"
                className="pt-[15px]"
                width={600}
                height={550}
            />
          <hr className="bg-black text-black border-slate-500 border-t-[0.5px] w-full my-8"></hr>
        </div>
        <div className="flex justify-center flex-col items-center w-full">
          <span className="pb-5 font-bold text-xl">Have a good day!</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
