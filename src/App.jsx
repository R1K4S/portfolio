import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PerfilPhoto from "./components/ui/PerfilPhoto";
import Contato from "./components/ui/Contato";
import Message from "./components/ui/Message";
import AboutMe from "./components/ui/AboutMe";
import TitleSection from "./components/ui/TitleSection";
export default function App() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <section>
        <Hero />
        <article className="gap-4 grid grid-cols-2 m-2">
          <div className="flex flex-col gap-2">
            <PerfilPhoto />
            <Contato />
          </div>
          <div className="flex flex-col gap-2">
            <Message />
            <AboutMe />
          </div>
        </article>
      </section>
      <section>
        <TitleSection title={"Skills"} />
      </section>
    </main>
  );
}
