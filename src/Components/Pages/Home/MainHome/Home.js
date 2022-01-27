import React from "react";
import Banner from "../Banner/Banner";
import Header from "../../../Shared/Header/Header";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeBlogs from "../HomeBlogs/HomeBlogs";
import Footer from "../../../Shared/Footer/Footer";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <HomeBlogs></HomeBlogs>
      <HomeAbout></HomeAbout>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
