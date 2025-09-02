import './App.css'
import Header from "@/components/header/header";
import Home from "@/components/home/home";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";

function App() {

  return (
    <>
    <main>
        <Header></Header>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
    </main>
    </>
  )
}

export default App
