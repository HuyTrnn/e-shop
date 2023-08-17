// import "./HomePage.scss";
import React from "react";
import Slider from "@/components/Slider";
import VideoContent from "@/components/VideoContent";
import InstagramSections from "@/components/InstaSection";
import ListItem from "@/components/ListProducts";
import { getAllProduct } from "@/apis/productApi";
import { GetStaticPropsContext } from "next";
import axios from "axios";
import { getData } from "@/apis/sliderApi";
import { getTypes } from "@/apis/backPack";

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params) return { props: {} };
  const slider = await getData();
  const wallets = await getTypes({ param: "wallets" });
  const backpacks = await getTypes({ param: "backpacks" });
  const totes = await getTypes({ param: "totes" });
  const crossbody = await getTypes({ param: "wallets" });

  return {
    props: {
      slider,
      wallets,
      backpacks,
      totes,
      crossbody,
    },
  };
}

async function HomePage({ slider }: { slider: any }) {
  const img = await getStaticProps({ params: { slider } });

  const ListContent = () => {
    return (
      <React.Fragment>
        <ListItem
          type={"backpacks"}
          name={"Backpacks"}
          data={img.props.backpacks?.data.data}
        />
        <ListItem
          type={"wallets"}
          name={"Wallet"}
          data={img.props.wallets?.data.data}
        />
        <ListItem
          type={"totes"}
          name={"Tote"}
          data={img.props.totes?.data.data}
        />
        <ListItem
          type={"crossbodies"}
          name={"CrossBody"}
          data={img.props.crossbody?.data.data}
        />
      </React.Fragment>
    );
  };
  return (
    <>
      <div className="home-page">
        <Slider props="" data={img.props.slider?.data} />
        <VideoContent />
        <ListContent />
        <InstagramSections/>
      </div>
    </>
  );
}

export default HomePage;
