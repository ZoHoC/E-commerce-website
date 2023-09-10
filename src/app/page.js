import styles from "./page.module.scss";

import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Landing from "@/components/Landing/Landing";
import Section from "@/components/Section/Section";
import Header from "@/modules/Header/Header";
import Services from "@/modules/Services/Services";
import FeaturedProducts from "@/modules/FeaturedProducts/FeaturedProducts";

export default function Home(props) {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Section isTertiary>
          <FeaturedProducts data={props} />
        </Section>
        <Section isSecondary>
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
