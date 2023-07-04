import { AboutMe } from "./components/AboutMe"
import { Contacto } from "./components/Contacto"
import { Experience } from "./components/Experience"
import { Proyects } from "./components/Proyects"
import { Study } from "./components/Study"
import { NavBar } from "./ui/NavBar"

export const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container text-center pb-5">
        <AboutMe />
        <Study />
        <Experience />
        <Proyects />
        <Contacto />
      </div>
    </div>
  )
}
