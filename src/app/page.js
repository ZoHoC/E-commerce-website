import Contact from "@/components/Contact/Contact";
import styles from "./page.module.scss";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import Section from "@/components/Section/Section";
import Header from "@/modules/Header/Header";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Section
          title={"Featured Products"}
          isTertiary
          titleAlignment="center"
        ></Section>
        <Section
          title={"Custom Furniture Built Only For You"}
          actionContainer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam saepe id reiciendis sunt, repudiandae libero amet rem quia quod?"
          }
          isSecondary
        >
          <Services />
        </Section>
        <Section title={"Join our newsletter and get 20% off"}>
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}
