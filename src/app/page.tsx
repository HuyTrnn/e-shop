// import "./HomePage.scss";
import React from "react";
import Slider from "@/components/Slider";
import VideoContent from "@/components/VideoContent";
import InstagramSections from "@/components/InstaSection";
import ListItem from "@/components/ListProducts";
import { GetStaticPropsContext } from "next";
import axios from "axios";
import { getData } from "@/apis/sliderApi";
import { getTypes } from "@/apis/backPack";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params) return { props: {} };
  const wallets = await getTypes({ param: "wallets" });
  const backpacks = await getTypes({ param: "backpacks" });
  const totes = await getTypes({ param: "totes" });
  const crossbody = await getTypes({ param: "wallets" });

  return {
    props: {
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
      <Header />
      <div className="home-page">
        <Slider props=""  />
        <VideoContent />
        <ListContent />
        <InstagramSections />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
