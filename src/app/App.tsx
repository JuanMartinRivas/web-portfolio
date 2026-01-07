import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <About />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  )
}

export default App
