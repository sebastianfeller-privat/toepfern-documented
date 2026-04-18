import Hero from "./components/home/Hero";
import Philosophie from "./components/home/Philosophie";
import Werke from "./components/home/Werke";
import Prozess from "./components/home/Prozess";
import KursSection from "./components/home/KursSection";
import Zitat from "./components/home/Zitat";

export default function Home() {
  return (
    <main>
      <Hero />
      <KursSection />
      <Philosophie />
      <Werke />
      <Prozess />
      <Zitat />
    </main>
  );
}