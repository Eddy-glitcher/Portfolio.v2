import './App.css'
import Header from "@/components/header/header";
import Home from "@/components/home/home";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

function App() {

  return (
    <>
    <main>
        <Header></Header>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
    </main>
    </>
  )
}

export default App
