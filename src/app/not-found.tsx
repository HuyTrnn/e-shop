import Link from "next/link";
import React from "react";

interface NotFoundProps {
  hideHeaderAndFooter: boolean;
}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div className="relative h-[100vh]  w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover bg-404-pattern -z-10"></div>
      <div className="text-center error-content">
        <h1 className="text-[100px] mb-0 capitalize font-bold text-dark-100 ">
          Whoops!
        </h1>
        <p className="inline-block w-full text-base text-center capitalize text-dark-400">
          we couldn&apos;t find that page
        </p>
        <Link
          href="/"
          className="bg-primary text-light-100 inline-block mt-[30px] py-2 px-8 rounded-md capitalize"
        >
          go back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
