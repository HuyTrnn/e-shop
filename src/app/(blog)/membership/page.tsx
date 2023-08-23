import Image from "next/image";
import React from "react";
import poster from "@/assets/imgs/poster.png";

export const metadata = {
  title: 'MemberShip',
  openGraph: {
    title: 'Blog',
  },
}

export default function MembershipPage() {
  return (
    <div className="m-auto flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className="text-[32px] uppercase mt-5 mb-[20px]">Membership</h2>
        </div>
        <div className="px-8 flex flex-col max-w-[1200px]">
          <Image alt="membership" src={poster} className="w-full h-full" />
        </div>
        <h2 className="uppercase font-bold text-[24px]">CHƯƠNG TRÌNH KHÁCH HÀNG THÂN THIẾT CAMELIA BRAND</h2>
        <span>Từ những sự ưu ái hết sức đặc biệt của các bạn đã dành cho Camelia trong thời gian vừa qua khi có rất nhiều khách hàng đã sở hữu nhiều sản phẩm, ủng hộ và yêu thích Camelia Brand. Chúng mình thật sự trân trọng điều đó.</span>
        <span>Chương trình khách hàng thân thiết ra đời, với mục tiêu nâng cao trải nghiệm khách hàng và tri ân nhiều hơn những khách hàng đã đồng hành cùng Camelia Brand từ những ngày đầu tiên.</span>
      </div>
    </div>
  );
}
