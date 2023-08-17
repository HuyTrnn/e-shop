import { getData } from "@/apis/sliderApi";
import img1 from "@/assets/imgs/img_instagram1.jpg";
import img2 from "@/assets/imgs/img_instagram2.jpg";
import img3 from "@/assets/imgs/img_instagram3.jpg";
import img4 from "@/assets/imgs/img_instagram4.jpg";
import Image from "next/image";

const InstaImg = async function () {
  const data = [img1, img2, img3, img4];
  return (
    <ul className="flex items-center justify-center">
      {data.map((img, index: number) => (
        <li key={index} className="mx-4">
          <a href={img.src} className="cursor-pointer">
            <Image
              alt=""
              width={290}
              height={290}
              className=" rounded-md"
              src={img.src}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
function InstagramSections() {
  return (
    <div className="intagram-section mx-7 border-t border-t-lightGray mb-7">
      <hr className="bg-black text-black border-black border-t-[0.5px] w-full my-8"></hr>

      <h2 className="flex font-semibold text-4xl my-8 w-full justify-center"> Instagram</h2>
      <InstaImg />
    </div>
  );
}

export default InstagramSections;
