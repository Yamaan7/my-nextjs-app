/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */



import Navbar from "./components/navbar";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./components/styles/styles.scss";


export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <AboutMe />
      <Education />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
