import Contact from "./Components/Contact.jsx"
import Experience from "./Components/Expiernce.jsx"

import ProfilePicture from "./Components/ProfilePhoto.jsx"
import Project from "./Components/Projects.jsx"
import Skills from "./Components/Skills.jsx"
import HeroSection from "./Components/HeroSection.jsx"


import NavBar from "./Components/Navbar.jsx"

function App(){

 
  return(
    <>
      <NavBar/>
      <main>
      
      <section id="home"><HeroSection/></section>
      <section id="Experience"><Experience/></section>
      <section id="Project"><Project/></section>
      <section id="Skills"><Skills/></section>
      <section id="Contact"><Contact/></section>
      </main>
    </>
  )
}
export default App