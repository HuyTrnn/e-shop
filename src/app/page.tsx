// import "./HomePage.scss";
import React from "react";
import Slider from "@/components/Slider";
import VideoContent from "@/components/VideoContent";
import InstagramSections from "@/components/InstaSection";
import ListItem from "@/components/ListProducts";

import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
interface Products {
  id: string;
  product_name: string;
  image: any;
  title: string;
  product_description: string;
  product_price: number;
  rating: any;
}

export const getServerSideProps: GetServerSideProps = async ({
  // params,
  res,
}) => {
  try {
    // const { type } = params;
    const result = await axios.get(`http://blog.test:8080/api/types/wallet`);
    

    return {
      props: { result },
    };
  } catch {
    // res.statusCode = 404;
    return {
      props: {},
    };
  }
};

function HomePage({
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const ListContent = () => {
  //   return (
  //     <React.Fragment>
  //       <ListItem name={"Backpacks"} />
  //       <ListItem name={"Wallet"} />
  //       <ListItem name={"Tote"} />
  //       <ListItem name={"CrossBody"} />
  //     </React.Fragment>
  //   );
  // };

  return result
  
  // (
  //   <>
  //     <div className="home-page">
  //       <Slider props="" />
  //       <VideoContent />
  //       <ListContent />
  //       <InstagramSections />
  //     </div>
  //   </>
  // );
}

export default HomePage;
