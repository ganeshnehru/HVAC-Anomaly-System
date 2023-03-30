import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ImprovementContent from "../../content/ImprovementContent.json";
import HowWillItBeUsed from "../../content/HowWillItBeUsed.json"
import { useHistory } from 'react-router-dom'

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  if(!localStorage.getItem("loggedIn")){
    localStorage.setItem("loggedIn","false");
  }
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="underconstruction.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="teamatwork.svg"
        id="product"
      />
      <ContentBlock
        type="right"
        title={HowWillItBeUsed.title}
        content={HowWillItBeUsed.text}
        icon="process_outline.svg"
        id="product"
      /> 
        <ContentBlock
        type="left"
        title={ImprovementContent.title}
        content={ImprovementContent.text}
        icon="developer_outline.svg"
        id="product"
      /> 
      {/* <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
