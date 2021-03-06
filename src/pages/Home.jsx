import { BasicContainer } from "../styles/containers";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Profesions from "../components/Profesions";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <BasicContainer>
      <Header />
      <Hero />
      <Profesions />
      <Footer />
    </BasicContainer>
  );
}
